"use client";
import { Menu } from "@headlessui/react";
import {
  LogOut,
  LucideIcon,
  UserCircle,
  User2,
  LucideProps,
  Settings,
  FileEdit,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export type DropDownLinkProps = {
  href: string;
  title: string;
  image?: string | LucideIcon;
  className?: string;
  onActive?: string;
  imgProps?: LucideProps;
};

const links: DropDownLinkProps[][] = [
  [
    {
      href: "#",
      title: "Profile",
      image: User2,
    },
    {
      href: "#",
      title: "Settings",
      image: Settings,
    },
    {
      href: "#",
      title: "Edit",
      image: FileEdit,
    },
  ],
  [
    {
      href: "#",
      title: "Log out",
      className: "text-red-500 font-medium",
      onActive: "bg-red-500 text-white",
      image: LogOut,
      imgProps: {
        strokeWidth: 2.9,
      },
    },
  ],
];

const styles = {
  base: "w-full p-1 h-8 rounded-md text-sm",
  active: "bg-primary-500 text-white",
};

const Item = ({ link }: { link: DropDownLinkProps }): React.JSX.Element => {
  const { title, href, className, imgProps, onActive }: DropDownLinkProps =
    link;
  return (
    <Menu.Item key={title} as={Fragment}>
      {({ active }) => (
        <Link
          href={href}
          className={twMerge(
            styles.base,
            className,
            active && !onActive && styles.active,
            active && onActive,
            "flex grid-cols-2 items-center gap-[.2em]"
          ).trim()}
        >
          <div className="w-7">
            {link.image && (
              <link.image {...imgProps} className="p-1 col-span-1 w-fit" />
            )}
          </div>
          {title}
        </Link>
      )}
    </Menu.Item>
  );
};

const Dropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="focus:outline-none">
        <UserCircle className="w-10 h-10" size={128} strokeWidth=".08rem" />
      </Menu.Button>
      <Menu.Items className="absolute w-48 right-0 border bg-gray-50 flex flex-col rounded-md">
        <div className="flex flex-col divide-y divide-gray-200">
          {links?.map((list) => {
            return (
              <div className="p-[.3rem]">
                {list.map((link) => {
                  return <Item link={link} />;
                })}
              </div>
            );
          })}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
