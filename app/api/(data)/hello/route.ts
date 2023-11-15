import { NextRequest, NextResponse } from "next/server";
import { limiter } from "../../config/limiter";

export const GET = async (req: NextRequest) => {
  const remaining = await limiter.removeTokens(1);
  //   console.log(remaining);

  if (remaining < 0)
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests",
      headers: {
        "Content-Type": "text/plain",
      },
    });

  return new NextResponse(JSON.stringify({ message: "Hello " }), {
    headers: {
      //   "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
};
