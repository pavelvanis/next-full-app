"use client";
import { TEInput } from "tw-elements-react";
import { CredentialsSignup } from "../components/Auth";
import { UserPlus2 } from "lucide-react";

export default function SignupForm(): JSX.Element {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <section className="w-[22rem] flex flex-col items-center justify-center bg-gray-100 p-7 pt-4 border border-gray-300 rounded-md shadow-lg ">
        <div className="bg-gray-100 w-full text-center py-2 rounded-md flex flex-row justify-center items-center gap-2">
          <h2 className="text-xl font-semibold">Signup</h2>
          <UserPlus2 strokeWidth={2.5} className="p-[.1rem]" />
        </div>
        <CredentialsSignup />
        <div className=" w-full flex flex-col gap-[.35rem]">
          <div className=" mb-5 h-6 w-full relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-full after:h-[.08rem] after:bg-gray-700">
            <span className="absolute left-1/2 -translate-x-1/2 bg-gray-100 z-10 px-1">
              OR
            </span>
          </div>
          <a
            href="/"
            className="h-13 flex flex-row items-center justify-center rounded-md border-2 border-black px-2 py-1 font-light transition-all duration-300 hover:bg-gray-200 hover:-translate-y-[.15rem] hover:shadow-lg"
          >
            <img
              src="https://www.svgrepo.com/show/509967/github.svg"
              alt=""
              className="me-2 w-8 p-1"
            />
            Sign up with
            <span className="ms-1 font-medium">GitHub</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-md border-2 border-black px-2 py-1 font-light transition-all duration-300 hover:bg-gray-200  hover:-translate-y-[.15rem]  hover:shadow-lg"
          >
            <img
              src="https://www.svgrepo.com/show/494349/linkedin.svg"
              alt=""
              className="me-2 w-8 p-1"
            />
            Sign up with
            <span className="ms-1 font-medium">LinkedIn</span>
          </a>
          <a
            href="/"
            className="flex flex-row items-center justify-center rounded-md border-2 border-black px-2 py-1 font-light transition-all duration-300 hover:bg-gray-200  hover:-translate-y-[.15rem]  hover:shadow-lg"
          >
            <img
              src="https://www.svgrepo.com/show/508761/apple.svg"
              alt=""
              className="me-2 w-8 p-1"
            />
            Sign up with
            <span className="ms-1 font-medium">Apple ID</span>
          </a>
        </div>
      </section>
    </main>
  );
}
