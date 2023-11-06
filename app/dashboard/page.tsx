"use client";

import { signOut } from "next-auth/react";
import DraDrop from "../components/DragDrop";
import SingleImageDropzone from "../components/files/SingleImageDropzone";
import { InputProps } from "tw-elements-react/dist/types/forms/Input/types";

const SingleImageDropzoneProps: InputProps = {
  width: 200,
  height: 300,
};

export default function Dashboard() {
  return (
    <div className="m-4">
      <SingleImageDropzone width={200} height={250}  />
    </div>
  );
}
