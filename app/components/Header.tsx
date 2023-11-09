import { FileEdit, LogOut, Settings, User2, UserCircle2 } from "lucide-react";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Dropdown, { DropDownLinkProps } from "./Dropdown";
import { signOut } from "next-auth/react";

const variants = {
  logged: "p-4 px-6 shadow-md",
  loggedOut: "p-4 px-6 shadow-md",
};

const Header = async () => {
  const session = await getServerSession();

  console.log(session);

  return (
    <>
      <header className="p-4 px-6 shadow-md">
        <nav className="flex items-center justify-between">
          <a
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
          </a>
          {/* {session?.user ? <Logged /> : <LoggedOut />} */}
          <Logged/>
        </nav>
      </header>
    </>
  );
};

export default Header;

export const LoggedOut = () => {
  return (
    <div>
      <a
        href="/login"
        className=" font-semibold hover:text-primary-500 relative before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:h-[.15rem] before:w-0 hover:before:w-full before:transition-all before:duration-500 before:rounded-full before:bg-primary-500 "
      >
        Login
      </a>
      <a
        href="/signup"
        className="border-primary-900 text-primary-900 hover:bg-primary-100 ms-4 rounded-md border-2 px-4 py-2 font-semibold transition-all duration-300"
      >
        Sign Up
      </a>
    </div>
  );
};

export const Logged = () => {
  return (
    <Dropdown/>
  );
};

const links: DropDownLinkProps[][] = [
  [
    {
      href: "#",
      title: "Profile",
      image: User2,
    },
    {
      href: "#",
      title: "Settings",
      image: Settings,
    },
    {
      href: "#",
      title: "Edit",
      image: FileEdit,
    },
  ],
  [
    {
      href: "#",
      title: "Log out",
      className: "text-red-500 font-medium",
      onActive: "bg-red-500 text-white",
      image: LogOut,
      imgProps: {
        strokeWidth: 2.9,
      },
      attributes: {
        onClick: () => signOut(),
      },
    },
  ],
];