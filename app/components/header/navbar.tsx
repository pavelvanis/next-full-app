import useOverWidth from "@/hooks/useOverWidth";
import Link from "next/link";
import React from "react";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }): JSX.Element => {
  return (
    <>
      {/* {show && ( */}
      <nav className=" flex ">
        <div className=" relative w-20">
          <Link
            href="/"
            className="link  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            Projects
          </Link>
        </div>
        <div className="relative w-20">
          <Link
            href="/"
            className="link hover:font-normal absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            Solutions
          </Link>
        </div>
        <div className="relative w-20">
          <Link
            href="/"
            className="link hover:font-normal absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            Pricing
          </Link>
        </div>
      </nav>
      {/* )} */}
    </>
  );
};

export default Navbar;
