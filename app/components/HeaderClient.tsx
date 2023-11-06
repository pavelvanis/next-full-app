"use client";

import { HeaderLinkType } from "@/lib/types";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import DateBox from "./DateBox";

const links: HeaderLinkType[] = [
  {
    href: "/#signin",
    title: "Login",
  },
  {
    href: "/#signup",
    title: "Sign up",
  },
  {
    href: "/dashboard",
    title: "Dashboard",
  },
];

const test = {
  user: {
    email: "email@email",
    name: "Sam Scott",
  },
};

const HeaderClient = () => {
  const { data: session } = useSession();
  return <>{session ? <LoggedIn session={session} /> : <LoggedOut />}</>;
};

export default HeaderClient;

export const LoggedIn = ({
  session,
}: {
  session: Session;
}): React.JSX.Element => {
  console.log(session);
  return (
    <nav className=" w-full flex justify-between">
      <div className="flex flex-col">
        <h1 className=" text-2xl font-semibold">{session.user?.name}</h1>
        <h1 className=" ps-1 text-lg font-light">{session.user?.email}</h1>
      </div>
      <div className=" flex flex-col items-center">
        <DateBox />
        <button onClick={() => signOut()} className=" w-20 text-gray-100 px-2 py-1 rounded-md bg-pink-700 hover:bg-pink-800">Log Out</button>
      </div>
    </nav>
  );
};

export const LoggedOut = (): React.JSX.Element => {
  return (
    <>
      <ul className=" list-none flex flex-row gap-6 items-center">
        {links.map((link) => {
          return <HeaderLink key={link.title} {...link} />;
        })}
      </ul>
    </>
  );
};

export const HeaderLink: React.FC<HeaderLinkType> = ({
  href,
  title,
}): React.JSX.Element => {
  return (
    <li className=" list-none  px-2 py-1 font-semibold text-xl text-pink-600 bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 hover:underline">
      <Link href={href}>{title}</Link>
    </li>
  );
};
