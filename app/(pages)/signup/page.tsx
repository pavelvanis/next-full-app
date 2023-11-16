"use client";
import { ProviderCard, providers } from "@/app/components/server/Auth";
import { CredentialsSignup } from "../../components/Auth";
import { UserPlus2 } from "lucide-react";
import Link from "next/link";

export default function SignupForm(): JSX.Element {
  return (
    <main className=" m-auto mt-20">
      <section className="w-[24rem] mt-10 flex flex-col items-center justify-center bg-gray-100 p-7 pt-4 border border-gray-300 rounded-md shadow-lg ">
        <div className="bg-gray-100 w-full text-center py-2 rounded-md flex flex-row justify-center items-center gap-2">
          <h2 className="text-xl font-semibold">Signup</h2>
          <UserPlus2 strokeWidth={2.5} className="p-[.1rem]" />
        </div>
        <CredentialsSignup />
        <div className=" w-full flex flex-col gap-[.35rem]">
          <div className=" mb-5 h-6 w-full relative after:absolute after:top-1/2 after:-translate-y-1/2 after:w-full after:h-[.08rem] after:bg-gray-700">
            <span className="absolute left-1/2 -translate-x-1/2 bg-gray-100 z-10 px-1">
              OR
            </span>
          </div>
          {providers.map((provider) => {
            return <ProviderCard key={provider.title} {...provider} />;
          })}
        </div>
      </section>
    </main>
  );
}
