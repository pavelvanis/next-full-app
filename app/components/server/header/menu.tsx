"use client";

import {
  Home,
  LogOut,
  Menu,
  Settings,
  User2,
  UserCircle2,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "../../utils/OutsideClick";
import { motion, AnimatePresence } from "framer-motion";
import ListItem from "../../list/listitem";
import ListGroup from "../../list/listgroup";
import List from "../../list/list";
import Link from "next/link";

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
      duration: 0.35,
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      ease: [0.22, 1, 0.36, 1],
      duration: 0.2,
    },
  },
};

const OpenMenu = (): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);

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
            <>
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" absolute z-30 origin-right top-0 w-72 bg-blue-200 h-[100vh] right-0 rounded-s-xl"
              >
                <List className=" divide-slate-600">
                  <ListGroup>
                    <ListItem as="div" className="py-1 h-12">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex gap-1.5">
                          <Link href="/">
                            <UserCircle2
                              width={"2.5rem"}
                              strokeWidth={".07rem"}
                              className="h-10"
                            />
                          </Link>
                          <div className="flex flex-col text-sm justify-center mt-1 gap-[.08rem]">
                            <h2 className="leading-[.95rem]">Pavel Vanis</h2>
                            <h2 className="leading-[.95rem] opacity-50">
                              LordKnedlik
                            </h2>
                          </div>
                        </div>
                        <button onClick={() => setOpened(false)}>
                          <XIcon className="self-start h-6" width={"2.5rem"} />
                        </button>
                      </div>
                    </ListItem>
                  </ListGroup>
                  <ListGroup>
                    <ListItem image as="a" href="/">
                      <Home className="p-[.2rem]" />
                      <span className="pt-[.2rem]">Home</span>
                    </ListItem>
                    <ListItem as="a" href="/">
                      <Settings className="p-[.2rem]" />
                      <span className="pt-[.2rem]">Settings</span>
                    </ListItem>
                    <ListItem as="a" href="/">
                      <User2 className="p-[.2rem]" />
                      <span className="pt-[.2rem]">Profile</span>
                    </ListItem>
                  </ListGroup>
                  <ListGroup>
                    <ListItem
                      as="a"
                      href="/"
                      className=" bg-red-500 text-white"
                    >
                      <LogOut className="p-[.2rem]" />
                      <span className="pt-[.2rem]">Sign out</span>
                    </ListItem>
                  </ListGroup>
                </List>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </OutsideClickHandler>
    </>
  );
};

export default OpenMenu;
