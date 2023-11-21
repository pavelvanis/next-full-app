"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const animations = {
  heading: {
    initial: {
      scaleY: 0,
      scaleX: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  },
};

export default function Home() {
  return (
    <main>
      <section className=" h-screen w-screen relative flex flex-col items-center justify-center">
        {/* White background */}
        <div
          id="background"
          className=" h-full w-full absolute left-0 top-0 z-10"
        ></div>
        {/* Colors background */}
        <div
          id="background2"
          className=" h-full w-full absolute left-0 top-0 z-0"
        ></div>
        {/* Content */}
        <div className="h-fit z-20 w-[80%] max-w-4xl ">
          <motion.h1
            // variants={animations.heading}
            // initial="initial"
            initial={{ opacity: 0, filter: "blur(1rem)" }}
            animate={{
              scaleY: [0, 1],
              scaleX: [0, 1],
              rotate: [-180, 0],
              opacity: 1,
              filter: "blur(0rem)",
              transition: {
                opacity: { duration: 1.8, ease: "easeInOut" },
                duration: 1.3,
                ease: "easeInOut",
              },
            }}
            className="  origin-bottom text-h xs:text-h-xs sm:text-h-sm md:text-h-md lg:text-h-lg font-bold text-center"
          >
            Start studying effectively.
          </motion.h1>
        </div>
      </section>
    </main>
  );
}

const Card = () => {
  return (
    <a className=" group flex h-[7rem] w-[8rem] p-4 cursor-pointer flex-col items-center justify-between rounded-sm border border-gray-400 bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-full w-full">
        <Image
          width={72}
          height={72}
          src="https://www.svgrepo.com/show/522744/archive-down.svg"
          alt="doc"
          className="absolute group-hover:w-12 left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 transform  transition-all duration-300"
        />
      </div>
      <h2 className="text-sm font-semibold">Document</h2>
    </a>
  );
};
