import bcrypt from "bcryptjs";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import {
  passwordValidation,
  validEmail,
  validName,
} from "@/lib/services/utils";
import { checkLimit } from "../../config/limiter";
import { connect } from "@/lib/mongodb";

// Get all users
export const GET = async (req: NextRequest) => {
  try {
    await connect();

    // Check request limit
    const limit = await checkLimit();
    if (limit) return limit;

    // const users = await client
    //   .db(mongoConfig.databases.authapp)
    //   .collection(mongoConfig.collections.users)
    //   .find({}, { projection: { __v: 0, password: 0 } })
    //   .toArray();

    const users = await User.find({}, { __v: 0, password: 0 });

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while finding the user." },
      { status: 500 }
    );
  }
};

// Create user
export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();

    // Check missing credentials
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill all credentials!" },
        { status: 400 }
      );
    }

    // Check email
    const emailCheck = validEmail(email);
    if (!emailCheck)
      return NextResponse.json(
        { message: "No valid email" },
        {
          status: 400,
          statusText: "Invalid email",
        }
      );

    // Check name
    const nameCheck = validName(name);
    if (nameCheck)
      return NextResponse.json(
        { message: nameCheck },
        { status: 400, statusText: "Invalid name" }
      );

    // Check password
    const passErrors = passwordValidation(password);
    if (passErrors.length !== 0)
      return NextResponse.json({ message: passErrors }, { status: 401 });

    // Connect to DB
    await connect();

    // Checking if user is already exist
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User with this email already exist" },
        { status: 409 }
      );
    }

    // Check request limit
    const limit = await checkLimit();
    if (limit) return limit;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    // Return success response
    return NextResponse.json(
      { message: "User registered." },
      {
        status: 201,
        headers: {
          "Content-Type": "appliaction/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
    // Return error response
    return new NextResponse(null, {
      status: 500,
      statusText: "Internal Server Error",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
