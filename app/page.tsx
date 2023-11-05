import Image from "next/image";
import Next from "../public/next.svg";
import DateBox from "./components/DateBox";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <main className="container min-h-screen items-center">
      <section id="home" className=" h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-end mb-16">
          <Image
            width={100}
            height={50}
            src="react.svg"
            alt="fe"
            className=" self-center  me-5"
          />
          <h1 className=" md:min-h-[130px] text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">
            Welcome Next.js
          </h1>
          <div className=" flex justify-center relative w-full">
            <div className=" mt-8 md:-bottom-4 md:left-1 h-14 w-full max-w-[230px] flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl rotate-3 md:rotate-6">
              <Image width={100} height={50} src="next.svg" alt="fe" />
            </div>
          </div>
        </div>
      </section>
      <section id="signin">
        <LoginForm />
      </section>
      <section id="signup">
        <SignupForm />
      </section>
    </main>
  );
}
