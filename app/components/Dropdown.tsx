"use client";
import { Menu } from "@headlessui/react";
import {
  LogOut,
  LucideIcon,
  User2,
  LucideProps,
  Settings,
  FileEdit,
  UserCircle2,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { Fragment, HTMLAttributes, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export type DropDownLinkProps = {
  href: string;
  title: string;
  image?: string | LucideIcon;
  className?: string;
  onActive?: string;
  imgProps?: LucideProps;
  attributes?: HTMLAttributes<HTMLAnchorElement>; // Použití HTMLAttributes pro odkazy
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
      attributes: {
        onClick: () => signOut(),
      },
    },
  ],
];

const styles = {
  base: "w-full p-2 h-9 rounded-md text-md",
  active: "bg-primary-500 text-white",
};

const Item = ({ link }: { link: DropDownLinkProps }): React.JSX.Element => {
  const {
    title,
    href,
    className,
    imgProps,
    onActive,
    attributes,
  }: DropDownLinkProps = link;
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
          {...attributes}
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
      <Menu.Button className=" group focus-visible:normal-case focus:outline-none  transition-all duration-200">
        <UserCircle2 className="w-12 h-10 " size={128} strokeWidth=".08rem" />
      </Menu.Button>
      <Menu.Items className="absolute w-48 right-0 border bg-gray-50 flex flex-col rounded-md">
        <div className="flex flex-col divide-y divide-gray-200">
          {links?.map((list) => {
            return (
              <div key={list.toString()} className="p-[.3rem]">
                {list.map((link) => {
                  return <Item key={link.title} link={link} />;
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
