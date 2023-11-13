import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Dropdown from "../Dropdown";
import Link from "next/link";
import { link } from "fs";
import { Menu } from "../header-client";

const variants = {
  logged: "p-4 px-6 shadow-md",
  loggedOut: "p-4 px-6 shadow-md",
};

const Header = async () => {
  const session = await getServerSession();

  return (
    <>
      <header className="p-4 px-6 shadow-md">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1 text-3xl font-extrabold"
          >
            <Image
              width={64}
              height={64}
              src="https://www.svgrepo.com/show/487131/brand-slack.svg"
              alt="logo"
              className="w-12"
            />
            UniPass
          </Link>
          <Menu />
          {session?.user ? <Logged /> : <LoggedOut />}
        </nav>
      </header>
    </>
  );
};

export default Header;

export type HeaderLinkProps = {
  title: string;
  link: string;
  active: boolean;
};

export const links: HeaderLinkProps[] = [
  {
    title: "Home",
    link: "/",
    active: true,
  },
  {
    title: "Subjects",
    link: "/",
    active: false,
  },
  {
    title: "Subject",
    link: "/",
    active: false,
  },
];

export const LoggedOut = () => {
  return (
    <div>
      <Link
        href="/login"
        className=" font-semibold hover:text-primary-500 relative before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:h-[.15rem] before:w-0 hover:before:w-full before:transition-all before:duration-500 before:rounded-full before:bg-primary-500 "
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="border-primary-900 text-primary-900 hover:bg-primary-100 ms-4 rounded-md border-2 px-4 py-2 font-semibold transition-all duration-300"
      >
        Sign Up
      </Link>
    </div>
  );
};

export const Logged = () => {
  return <Dropdown />;
};
