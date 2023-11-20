"use client";

import useOverWidth from "@/hooks/useOverWidth";
import OpenMenu from "./menu";
import Navbar from "./navbar";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Template = (): JSX.Element => {
    const { data: session, status } = useSession();
  // const session = false;
  // console.log(session);
  const md = useOverWidth(700);
  return (
    <>
      {md && <Navbar />}
      {md && !session && <Buttons />}
      {(!md || session) && <OpenMenu />}
    </>
  );
};

export default Template;

const Buttons = (): JSX.Element => {
  return (
    <div className="flex gap-4 items-center mr-4">
      <Link href="/login" className="btn">Login</Link>
      <Link href="/login" className="btn">Sign up</Link>
    </div>
  );
};
