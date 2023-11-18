import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ListGroupProps = {
  className?: string;
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | 'xl';
};

const varinats = {
  base: "flex flex-col",
  sm: " space-y-[.3rem]",
  md: "space-y-[.5rem]",
  lg: "space-y-[.7rem]",
  xl: "space-y-[.9rem]",
};

const ListGroup: React.FC<ListGroupProps> = ({
  size,
  className,
  children,
}): JSX.Element => {
  return (
    <div
      className={twMerge(
        size ? varinats[size] : varinats.sm,
        varinats.base,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ListGroup;
