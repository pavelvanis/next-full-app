import { NextRequest, NextResponse } from "next/server";
import { checkLimit } from "../../config/limiter";

export const GET = async (req: NextRequest) => {
  const limit = await checkLimit();

  if (limit) return limit;

  return new NextResponse(JSON.stringify({ message: "Hello " }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
