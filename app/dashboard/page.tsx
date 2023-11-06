import { getServerSession } from "next-auth";
import SingleImageDropzone from "../components/files/SingleImageDropzone";
import { InputProps } from "tw-elements-react/dist/types/forms/Input/types";
import { authOptions } from "../api/auth/[...nextauth]/route";

const SingleImageDropzoneProps: InputProps = {
  width: 200,
  height: 300,
};

export default async function Dashboard() {
  return (
    <div className="m-4">
      <SingleImageDropzone width={200} height={250} />
    </div>
  );
}
