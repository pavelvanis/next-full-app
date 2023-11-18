import { ReactNode, useEffect, useRef } from "react";

type Props = {
  onOutsideClick: Function;
  children: ReactNode;
};

const OutsideClickHandler: React.FC<{
  onOutsideClick: Function;
  children: ReactNode;
  className?: string;
}> = ({ onOutsideClick, children, className }): JSX.Element => {
  const wrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (wrapper.current && !wrapper.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onOutsideClick]);

  return (
    <div className={className} ref={wrapper}>
      {children}
    </div>
  );
};

export default OutsideClickHandler;
