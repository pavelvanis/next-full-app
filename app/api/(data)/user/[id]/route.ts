import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    if (id.length !== 24)
      return NextResponse.json({ message: "Inavlid id" }, { status: 400 });

    const user = await User.findOne({ _id: id }, { password: 0, __v: 0 });
    if (!user) {
      return NextResponse.json(
        { message: "User with this id doesn't exist" },
        { status: 400 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error while finding user" },
      { status: 500 }
    );
  }
};
