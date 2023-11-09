"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { TEInput } from "tw-elements-react";

type SignupProps = {
  email: string;
  name: string;
  password: string;
};

export const CredentialsSignup = () => {
  const credentials = useRef<SignupProps>({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !credentials.current.email ||
      !credentials.current.name ||
      !credentials.current.password
    )
      return setError("Please fill all credentials!");

    setError("");

    try {
      const resUserExist = await fetch("/api/userExist", {
        method: "POST",
        body: JSON.stringify({ email: credentials.current.email }),
      });
      const { user } = await resUserExist.json();
      if (user) return setError("This user already exist!");

      const res = await fetch("api/signup/", {
        method: "POST",
        body: JSON.stringify({ ...credentials.current }),
      });
      if (res.ok) {
        formRef.current?.reset();
        router.push(`/${credentials.current.name}`); // redirect user to his homepage
      }
    } catch (error) {
      console.log(error);
      setError("Somthing went wrong");
    }
  };
  return (
    <form ref={formRef} onSubmit={onSubmit} className="w-full">
      <div className="group relative space-y-4 my-5">
        {/* Email input */}
        <TEInput
          type="email"
          name="email"
          label="Email address"
          size="md"
          className="bg-white"
          onChange={(e) => (credentials.current.email = e.target.value)}
        ></TEInput>

        {/* Name input */}
        <TEInput
          type="text"
          name="name"
          label="Name"
          className="bg-white"
          size="md"
          onChange={(e) => (credentials.current.name = e.target.value)}
        ></TEInput>

        {/* Password input */}
        <TEInput
          type="password"
          name="password"
          label="Password"
          className="bg-white"
          size="md"
          onChange={(e) => (credentials.current.password = e.target.value)}
        ></TEInput>
        {error && (
          <div className="ms-2 mt-1 text-sm font-medium text-red-600">
            <p>* {error}</p>
          </div>
        )}
      </div>
      <div className=" mb-3 flex flex-col justify-end items-end gap-4">
        <button
          type="submit"
          className=" w-[90%] self-center font-medium border-[.12rem] px-2 py-0.5 rounded-md border-black hover:bg-gray-200 hover:scale-[.97]"
        >
          Sign up
        </button>
        <Link
          href="/login"
          className="mx-3  mb-2 relative text-sm after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[.07rem] hover:after:w-full after:rounded-full after:bg-black after:transition-all after:duration-700 "
        >
          Have an account?
        </Link>
      </div>
    </form>
  );
};

export const Auth = () => {
  return (
    <form>
      {/* Email input */}
      <TEInput
        type="email"
        name="email"
        label="Email address"
        size="md"
        className="bg-white"
        // onChange={(e) => (credentials.current.email = e.target.value)}
      ></TEInput>

      {/* Password input */}
      <TEInput
        type="text"
        name="name"
        label="Name"
        className="bg-white"
        size="md"
        // onChange={(e) => (credentials.current.name = e.target.value)}
      ></TEInput>
    </form>
  );
};
