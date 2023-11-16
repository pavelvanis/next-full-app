import Image from "next/image";

const cards = [
  {
    title: "Doc",
    href: "#",
    image: "",
  },
  {
    title: "Doc",
    href: "#",
    image: "",
  },
  {
    title: "Doc",
    href: "#",
    image: "",
  },
  {
    title: "Doc",
    href: "#",
    image: "",
  },
  {
    title: "Doc",
    href: "#",
    image: "",
  },
  {
    title: "Doc",
    href: "#",
    image: "",
  },
];

export default function Home() {
  return (
    <main>
      <section
        id="features"
        className=" container  mt-10 md:mt-20 flex flex-col items-center p-4 text-center"
      >
        <h1 className="mb-5 text-4xl font-semibold">Provided features</h1>
        <p className="mb-9 font-light max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          consequatur! Nisi quisquam ab.
        </p>
        <div className="grid w-fit grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {cards.map((card) => {
            return <Card key={card.href} />;
          })}
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
