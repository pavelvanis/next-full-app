"use client";
import React, { useEffect, useState } from "react";
import { HeaderLinkProps, links } from "./server/Header";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Menu = () => {
  return (
    <ul className="flex flex-row gap-6 ">
      {links.map((link) => {
        return (
          <li key={link.title}>
            <HeaderLink {...link} />
          </li>
        );
      })}
    </ul>
  );
};

const variants = {
  active: "",
  base: "group-hover:left-0 absolute bottom-0 w-full h-[.1rem] bg-black transition-all duration-500",
  leaving: "right-full",
};

const HeaderLink: React.FC<HeaderLinkProps> = ({
  title,
  link,
}): React.JSX.Element => {
  const [leaving, setLeaving] = useState<boolean>(false);
  useEffect(() => {
    console.log(leaving);
  }, [leaving]);

  const handleHover = () => {
    setLeaving(true);
    setTimeout(() => console.log("delay"), 400);
  };

  return (
    <div
      //   href={link}
      onMouseLeave={() => {
        console.log("leave");
        setLeaving(true);
        setTimeout(() => setLeaving(false), 500);
      }}
      className=" group overflow-hidden relative"
    >
      <Link href={link}>{title}</Link>
      <div
        className={`${twMerge(
          variants.base,
          leaving ? "left-full" : " -left-full"
        )}`}
      ></div>
    </div>
  );
};
