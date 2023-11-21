import Template from "./template";

const Header = () => {
  return (
    <>
      <header className="h-14 fixed z-30 top-0 left-0 w-full ">
        <div className="relative mx-auto w-full max-w-[85rem]">
          <div className="p-2 flex justify-between mx-2 h-full">
            <Template />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
