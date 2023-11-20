"use client";
import Image from "next/image";
import Link from "next/link";
import OpenMenu from "./menu";
import Navbar from "./navbar";
import Template from "./template";
import { motion } from "framer-motion";
import Logo, { Example } from "./logo";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Header = () => {
  return (
    <>
      <header className="h-14 fixed z-30 top-0 left-0 w-full ">
        <div className="relative mx-auto w-full max-w-[85rem]">
          <div className="p-2 flex justify-between mx-2 ">
            <div className=" w-40">
              {/* <Logo /> */}
              <Link
                href="/"
                className="flex items-center gap-1 font-semibold text-xl"
              >
                <Logo />
                studyhub
              </Link>
            </div>
            <Template />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
