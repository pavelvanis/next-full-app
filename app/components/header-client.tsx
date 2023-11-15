"use client";
import React, { useState } from "react";
import { HeaderLinkProps, links } from "./server/Header";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const [active, setActive] = useState<string>("");
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
  active: "text-red-800",
  hovered: "hover:text-red-800",
  base: "absolute bottom-0 -left-full group-hover:translate-x-full w-full group-hover:h-[.1rem] bg-black transition-transform duration-500",
  leaving: "translate-x-full",
};

const HeaderLink: React.FC<HeaderLinkProps> = ({
  title,
  link,
  active,
}): React.JSX.Element => {
  const [leaving, setLeaving] = useState<boolean>(false);
  const [current, setCurrent] = useState<boolean>(active);

  const pathanme = usePathname();
  // console.log(pathanme === link);

  return (
    <div
      onMouseLeave={() => {
        setLeaving(true);
        setTimeout(() => setLeaving(false), 500);
      }}
      className=" group overflow-hidden relative"
    >
      <Link
        className={`${twMerge(
          variants.hovered,
          pathanme === link ? variants.active : null
        )}`}
        href={link}
      >
        {title}
      </Link>
      <div
        className={`${twMerge(
          variants.base,
          leaving && "translate-x-[200%] h-[.1rem]"
        )}`}
      ></div>
    </div>
  );
};
