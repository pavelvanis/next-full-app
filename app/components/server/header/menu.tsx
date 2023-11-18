"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "../../utils/OutsideClick";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogged from "./logged";
import { useSession } from "next-auth/react";
import HeaderLoggedOut from "./loggedout";

const menuVars = {
  initial: {
    scaleX: 0,
    transition: {
      duration: 0.35,
    },
  },
  animate: {
    scaleX: 1,
    transition: {
      ease: [0.12, 0, 0.39, 0],
      duration: 0.3,
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      ease: [0.22, 1, 0.36, 1],
      duration: 0.25,
    },
  },
};

const OpenMenu = (): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);
  const { data: session, status } = useSession();
  // const session = true;

  console.log(session?.user?.name);

  const handleClick = () => {
    setOpened((prev) => (prev ? false : true));
  };
  return (
    <>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, backgroundColor: "black" }}
          className="absolute z-20 top-0 left-0 w-screen h-screen"
        />
      )}
      <OutsideClickHandler
        className=" flex items-center"
        onOutsideClick={() => setOpened(false)}
      >
        <button onClick={handleClick} className="">
          <Menu />
        </button>
        <AnimatePresence>
          {opened && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className=" absolute z-30 origin-right top-0 w-72 bg-blue-200 h-[100vh] right-0 rounded-s-xl"
            >
              {session ? (
                <HeaderLogged
                  session={session}
                  closeHandler={() => setOpened(false)}
                />
              ) : (
                <HeaderLoggedOut closeHandler={() => setOpened(false)} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </OutsideClickHandler>
    </>
  );
};

export default OpenMenu;
