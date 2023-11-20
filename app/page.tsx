import Image from "next/image";

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
        <div className="h-fit z-20 w-[80%] max-w-4xl text-5xl">
          <h1 className=" min-[500px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center">
            Start studying effectively
          </h1>
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
