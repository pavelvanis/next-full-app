import { connect } from "@/lib/mongodb";
import User from "@/models/user";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    await connect();
    const user = await User.findOne({ email });
    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while finding the user." },
      { status: 500 }
    );
  }
}
