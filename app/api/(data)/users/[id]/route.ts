import { checkLimit } from "@/app/api/config/limiter";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

// Get user by id
export const GET = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    // Check request limit
    const limit = await checkLimit();
    if (limit) return limit;

    // Check valid id
    if (id.length !== 24)
      return NextResponse.json({ message: "Inavlid id" }, { status: 400 });

    // Find user by id
    const user = await User.findOne({ _id: id }, { password: 0, __v: 0 });
    if (!user) {
      return NextResponse.json(
        { message: "User with this id doesn't exist" },
        { status: 400 }
      );
    }

    // Return user
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error while finding user" },
      { status: 500 }
    );
  }
};

// Delete user by id
export const DELETE = async (req: NextRequest, { params: { id } }: Props) => {
  // Check request limit
  const limit = await checkLimit();
  if (limit) return limit;

  // Check valid id
  if (id.length !== 24)
    return new NextResponse(null, { status: 400, statusText: "Invalid id" });

  try {
    // Check if user exist
    const user = await User.findOne({ _id: id });
    if (!user) {
      return new NextResponse(null, {
        status: 400,
        statusText: "User does not exist",
      });
    }

    // Deleting user
    const deleted = await User.deleteOne({ _id: id });

    // console.log(deleted.acknowledged);

    // Check if deleting was proceed
    if (!deleted.acknowledged) {
      return new NextResponse(null, {
        status: 400,
        statusText: "Error while deleting user",
      });
    }

    // Return success resopnse
    return new NextResponse(null, {
      status: 202,
      statusText: "User was deleted",
    });
  } catch (error) {
    console.error(error);
    // Return error response
    return new NextResponse(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
