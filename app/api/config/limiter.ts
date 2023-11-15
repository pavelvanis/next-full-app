import { RateLimiter } from "limiter";
import { NextResponse } from "next/server";

// Create a RateLimiter instance with a limit of 3 requests per minute,
// allowing immediate firing of tokens.
export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "minute",
  fireImmediately: true,
});

// Define a constant for the error response when the request limit is exceeded.
const ERROR_RESPONSE = new NextResponse(null, {
  status: 429,
  statusText: "Too many requests",
  headers: {
    "Content-Type": "text/plain",
  },
});

/**
 * Check the request limit using the rate limiter.
 * @returns {NextResponse|undefined} The error response if the limit is exceeded, otherwise undefined.
 */
export const checkLimit = async () => {
  // Attempt to remove 1 token from the limiter.
  const remaining = await limiter.removeTokens(1);

  // Uncomment the line below for logging the remaining tokens.
  // console.log(remaining);

  // If the remaining tokens are negative, return the error response.
  if (remaining < 0) return ERROR_RESPONSE;
};
