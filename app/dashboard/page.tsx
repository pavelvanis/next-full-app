"use client"

import { signOut } from "next-auth/react";

export default function Dashboard() {
  return (
    <div className="m-4">
      User information
      <button
        onClick={() => signOut()}
        className="border border-black p-1 bg-gray-300 hover:bg-gray-500 hover:text-gray-100 ms-4"
      >
        Log out
      </button>
    </div>
  );
}
