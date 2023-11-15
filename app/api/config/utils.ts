import { NextResponse } from "next/server";

export const ERROR_RESPONSE_SERVER = new NextResponse(null, {
  status: 500,
  statusText: "Internal Server Error",
  headers: {
    "Content-Type": "text/plain",
  },
});
