import Image from "next/image";
import Next from '../public/next.svg'

export default function Home() {
  return (
    <main className='container min-h-screen items-center flex justify-center'>
      <div className="flex flex-row items-end">
        <Image width={100} height={50} src='next.svg' alt="fe" className="mb-2" />
        <h1 className="text-center text-6xl font-bold ">Welcome Next.js</h1>
      </div>
    </main>
  )
}
