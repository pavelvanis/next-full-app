"use client";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { url } from "inspector";
import Link from "next/link";
export default function DraDrop() {
  const [file, setFile] = useState<File>();
  const [urls, setUrls] = useState<{
    url: string;
  }>();
  const [progress, setProgress] = useState<number>(0);
  const { edgestore } = useEdgeStore();
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
      <div className=" h-2 w-52 my-5 border border-black rounded overflow-hidden">
        <div
          className=" bg-green-700 h-full w-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                setProgress(progress);
              },
            });
            setUrls({
              url: res.url,
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
          }
        }}
      >
        Upload
      </button>
      {urls?.url && (
        <Link href={urls.url} target="_blank">
          Link
        </Link>
      )}
    </div>
  );
}
