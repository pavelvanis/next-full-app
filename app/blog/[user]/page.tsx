"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { user } = useParams();
  return <p>Post: {user}</p>;
}
