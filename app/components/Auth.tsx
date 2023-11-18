"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { TEInput } from "tw-elements-react";

export type SignupProps = {
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
  const [error, setError] = useState<string[] | string>();
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("api/users/", {
        method: "POST",
        body: JSON.stringify({ ...credentials.current }),
      });
      if (!res.ok) {
        const { message } = await res.json();
        return setError(message);
      }

      const login = await signIn("credentials", {
        redirect: false,
        email: credentials.current.email,
        password: credentials.current.password,
      });

      if (login?.ok) {
        formRef.current?.reset();
        router.push(`/${credentials.current.name}`);
      }
    } catch (error: any) {
      setError("Somthing went wrong");
    }
  };
  return (
    <form ref={formRef} onSubmit={onSubmit} className="w-full">
      <div className=" relative space-y-4 my-5">
        {/* Email input */}
        <TEInput
          type="email"
          label="Email address"
          size="md"
          className="bg-white"
          onChange={(e) => (credentials.current.email = e.target.value)}
        ></TEInput>

        {/* Name input */}
        <TEInput
          type="text"
          label="Name"
          className="bg-white"
          size="md"
          onChange={(e) => (credentials.current.name = e.target.value)}
        ></TEInput>

        {/* Password input */}
        <TEInput
          type="password"
          label="Password"
          className="bg-white"
          size="md"
          onChange={(e) => (credentials.current.password = e.target.value)}
        ></TEInput>
        {error && (
          <div className="ms-2 mt-1 tex-sm font-medium text-red-600">
            {Array.isArray(error) ? (
              <div className=" text-sm space-y-1">
                {error.map((message) => (
                  <p className=" space-y-1" key={message}>
                    * {message}
                  </p>
                ))}
              </div>
            ) : (
              <p className=" text-sm">* {error}</p>
            )}
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

export type LoginProps = {
  email: string;
  password: string;
};

export const CredentialsLogin = () => {
  const credentials = useRef<LoginProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentials.current.email || !credentials.current.password)
      return setError("Please fill all credentials!");
    setError("");
    try {
      // const resUserExist = await fetch("/api/userExist", {
      //   method: "POST",
      //   body: JSON.stringify({ email: credentials.current.email }),
      // });

      // const { user } = await resUserExist.json();
      // if (!user) return setError("This user does not exist!");

      const res = await signIn("credentials", {
        email: credentials.current.email,
        password: credentials.current.password,
        redirect: false,
      });

      if (res?.error) {
        console.error(error);
        return setError("Bad password!");
      }
      formRef.current?.reset();
      router.push(`/user`);
    } catch (error) {
      console.error(error);
      setError("Something went wrong!");
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="w-full">
      <div className=" relative space-y-4 my-5">
        {/* Email input */}
        <TEInput
          type="email"
          label="Email address"
          size="md"
          className="bg-white"
          onChange={(e) => (credentials.current.email = e.target.value)}
        ></TEInput>

        {/* Password input */}
        <TEInput
          type="password"
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
      <div className=" flex flex-col justify-end items-end gap-4">
        <button
          type="submit"
          className=" w-[90%] self-center font-medium border-[.12rem] px-2 py-0.5 rounded-md border-black hover:bg-gray-200 hover:scale-[.97]"
        >
          Login
        </button>
        <Link
          href="/signup"
          className="mx-3  mb-2 relative text-sm after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[.07rem] hover:after:w-full after:rounded-full after:bg-black after:transition-all after:duration-700 "
        >
          Do not have an account?
        </Link>
      </div>
    </form>
  );
};

export type ProviderCardProps = {
  image: string;
  link: string;
  title: string;
};

export const providers: ProviderCardProps[] = [
  {
    image: "https://www.svgrepo.com/show/509967/github.svg",
    title: "Github",
    link: "",
  },
  {
    image: "https://www.svgrepo.com/show/494349/linkedin.svg",
    title: "Linkedin",
    link: "",
  },
  {
    image: "https://www.svgrepo.com/show/508761/apple.svg",
    title: "Apple ID",
    link: "",
  },
];

export const ProviderCard: React.FC<ProviderCardProps> = ({
  image,
  title,
  link,
}) => {
  return (
    <Link
      href={link}
      className="h-13 flex flex-row items-center justify-center rounded-md border-2 border-black px-2 py-1 font-light transition-all duration-300 hover:bg-gray-200 hover:-translate-y-[.15rem] hover:shadow-lg"
    >
      <Image src={image} alt="" className="me-2 w-8 p-1" />
      Sign up with
      <span className="ms-1 font-medium">{title}</span>
    </Link>
  );
};
