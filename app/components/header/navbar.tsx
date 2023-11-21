import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "framer-motion/dom";

type NavbarProps = {
  className?: string;
};

const links: ItemProps[] = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

const Navbar: React.FC<NavbarProps> = ({ className }): JSX.Element => {
  return (
    <ul className="flex gap-6 items-center">
      {links.map((link, index) => (
        <Item key={link.href} {...link} index={index} />
      ))}
    </ul>
  );
};

export default Navbar;

type ItemProps = {
  href: string;
  title: string;
  index?: number;
};

const animations = {
  initial: {
    y: -70,
    filter: "blur(10px)",
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4 * index,
    },
  }),
};

const Item = ({ title, href, index }: ItemProps) => {
  return (
    <motion.li
      variants={animations}
      initial="initial"
      animate="animate"
      custom={index}
    >
      <Link href={href} className=" text-xl text-light hover:">
        {title}
      </Link>
    </motion.li>
  );
};

// animate("li", { opacity: 1 }, { delay: stagger(0.3) });
