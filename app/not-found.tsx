import Link from "next/link";

export default function notFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-5">
      <h1 className=" text-3xl md:text-5xl font-bold">
        This page was not found
      </h1>
      <div className=" text-3xl">
        <Link href="/" className="button hover:shadow-md ">
          Go home
        </Link>
      </div>
    </main>
  );
}
