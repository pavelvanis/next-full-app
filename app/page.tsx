import Image from "next/image";
import Next from '../public/next.svg'
import DateBox from "./components/DateBox";

export default function Home() {
  return (
    <main className='container min-h-screen items-center flex justify-center'>
      <DateBox />
      <div className="flex flex-row items-end mb-7">
        <Image width={100} height={50} src='next.svg' alt="fe" className="mb-2" />
        <h1 className="text-center text-6xl font-bold ">Welcome Next.js</h1>
      </div>
    </main>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/hello');
//   const date = await res.json();

//   return { props: { date } }
// }