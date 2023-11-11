import bcrypt from "bcryptjs";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { passwordValidation } from "@/lib/services/validation";

export const GET = async (req: NextRequest) => {
  try {
    const users = await User.find({}, { __v: 0 });
    console.log(users);

    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while finding the user." },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill all credentials!" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User with this email already exist" },
        { status: 409 }
      );
    }

    const pass = passwordValidation(password);
    if (pass) return NextResponse.json({ message: pass }, { status: 401 });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
};
