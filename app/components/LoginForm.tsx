"use client";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";

export default function LoginForm(): JSX.Element {
  const email = useRef("");
  const password = useRef("");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.current || !password.current) {
      console.log("err");
      return setError("All fields are necessary");
    } else setError("");

    try {
      const res = await signIn("credentials", {
        email: email.current,
        password: password.current,
        redirect: false,
      });

      if (res?.error) {
        console.log(res.error);
        setError("Invalid credentials!");
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TEInput
        type="email"
        label="Email address"
        size="lg"
        className="mb-6"
        onChange={(e) => (email.current = e.target.value)}
      ></TEInput>

      {/* <!--Password input--> */}
      <TEInput
        type="password"
        label="Password"
        className="mb-3"
        size="lg"
        onChange={(e) => (password.current = e.target.value)}
      ></TEInput>
    </>
  );
}
