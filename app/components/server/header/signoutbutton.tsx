import { LogOut } from "lucide-react";
import ListItem from "../../list/listitem";
import { signOut } from "next-auth/react";

const SignoutButton = (): JSX.Element => {
  return (
    <ListItem
      as="a"
      href="/"
      className=" bg-red-500 hover:bg-red-600 text-white"
      onClick={signOut}
    >
      <LogOut className="p-[.2rem]" />
      <span className="pt-[.2rem]">Sign out</span>
    </ListItem>
  );
};

export default SignoutButton;
