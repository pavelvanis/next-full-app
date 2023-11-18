import React, { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  sm: " p-1 ps-3 ",
  md: "p-[.4rem]",
  lg: "p-2 text-xl",
  xl: "p-2.5 text-2xl",
  base: "rounded-lg ps-4 flex gap-[.3rem] items-center font-normal hover:bg-blue-300 transition-all duration-300",
};

export type ListItemProps = {
  className?: string;
  children?: ReactNode;
  as: "div" | "a";
  href?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: Function;
};

const itemVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ListItem: React.FC<ListItemProps> = ({
  as,
  children,
  className,
  href,
  size,
  onClick,
}): JSX.Element => {
  if (as === "a" && href) {
    return (
      <AnimatePresence>
        <motion.div
          variants={itemVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" origin-bottom"
        >
          <Link
            href={href}
            className={twMerge(
              size ? variants[size] : variants.md,
              variants.base,
              className,
              ""
            )}
            onClick={onClick ? () => onClick() : undefined}
          >
            {children}
          </Link>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return (
      <motion.div
        variants={itemVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className=" origin-bottom"
      >
        <div
          className={twMerge(
            size ? variants[size] : variants.md,
            variants.base,
            className
          )}
          onClick={() => onClick}
        >
          {children}
        </div>
      </motion.div>
    );
  }
};

export default ListItem;
