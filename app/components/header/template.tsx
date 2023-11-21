"use client";

import useOverWidth from "@/hooks/useOverWidth";
import OpenMenu from "./menu";
import Navbar from "./navbar";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoIcon from "./logo";
import { motion, AnimatePresence } from "framer-motion";

const Template = (): JSX.Element => {
  const { data: session, status } = useSession();
  const md = useOverWidth(700);
  return (
    <>
      <Logo />
      {md && <Navbar />}
      {md && !session && <Buttons />}
      {(!md || session) && <OpenMenu />}
    </>
  );
};

export default Template;

const Buttons = (): JSX.Element => {
  return (
    <div className=" w-44 flex gap-4 items-center">
      <div className="relative w-20">
        <Link href="/login" className="button">
          Login
        </Link>
      </div>
      <div className="relative w-24">
        <Link href="/login" className="button">
          Sign up
        </Link>
      </div>
    </div>
  );
};

const Logo = (): JSX.Element => {
  return (
    <div className=" w-40">
      <Link href="/" className=" w-40 flex items-center gap-1 ">
        <LogoIcon />
        <AnimatePresence>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: .4, ease: "easeInOut" },
            }}
            className=" origin-left h-full font-semibold text-xl"
          >
            <h1>studyhub</h1>
          </motion.div>
        </AnimatePresence>
      </Link>
    </div>
  );
};
