import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ListProps = {
  className?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
};

const variants = {
  base: "divide-y flex flex-col",
  sm: "[.4rem]",
  md: "2",
  lg: "2.5",
  xl: "3",
  wrapper: {
    sm: "2",
    md: "2",
    lg: "3",
    xl: "3.5",
  },
};

const List: React.FC<ListProps> = ({
  className,
  children,
  size,
}): JSX.Element => {
  const isSize = size ? size : "md";
  return (
    <div
      className={twMerge(
        `p-${variants.wrapper[isSize]}`,
        variants.base,
        className
      )}
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={twMerge(
            index === 0
              ? `pb-${variants[isSize]}`
              : index === React.Children.toArray(children).length - 1
              ? `pt-${variants[isSize]}`
              : `py-${variants[isSize]}`
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default List;
