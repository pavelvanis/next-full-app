import Image from "next/image";
import Link from "next/link";
import OpenMenu from "./menu";

const Header = () => {

  return (
    <>
      <header className="h-14 relative">
        <div className="p-2 flex justify-between mx-2 ">
          <div>
            <Link
              href="/"
              className="flex items-center gap-1 font-medium text-xl"
            >
              <Image
                width={48}
                height={48}
                alt="logo"
                className="h-10 w-fit p-[.15rem]"
                src="https://www.svgrepo.com/show/414182/study.svg"
              />
              studyhub
            </Link>
          </div>
          <OpenMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
