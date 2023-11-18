import { UserCircle2, Home, Settings, User2, LogOut } from "lucide-react";
import ListGroup from "../../list/listgroup";
import ListItem from "../../list/listitem";
import { CloseButton } from "./closebutton";
import List from "../../list/list";
import Link from "next/link";
import { Session } from "next-auth";
import SignoutButton from "./signoutbutton";

const HeaderLogged = ({
  closeHandler,
  session,
}: {
  closeHandler: Function;
  session: Session;
}): JSX.Element => {
  return (
    <List className=" divide-slate-600">
      <ListGroup>
        <ListItem as="div" className="py-1 ps-2 h-12 hover:bg-transparent">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1.5">
              <Link href="/" className="">
                <UserCircle2
                  width={"2.5rem"}
                  strokeWidth={".07rem"}
                  className="h-10"
                />
              </Link>
              <div className="flex flex-col text-sm justify-center mt-1 gap-[.08rem]">
                <h2 className="leading-[.95rem]">{session.user?.name}</h2>
                <h2 className="leading-[.95rem] opacity-50">
                  {session.user?.email}
                </h2>
              </div>
            </div>
            <CloseButton onClick={closeHandler} />
          </div>
        </ListItem>
      </ListGroup>
      <ListGroup>
        <ListItem as="a" href="/">
          <Home className="p-[.2rem]" />
          <span className="pt-[.2rem]">Home</span>
        </ListItem>
        <ListItem as="a" href="/">
          <Settings className="p-[.2rem]" />
          <span className="pt-[.2rem]">Settings</span>
        </ListItem>
        <ListItem as="a" href="/">
          <User2 className="p-[.2rem]" />
          <span className="pt-[.2rem]">Profile</span>
        </ListItem>
      </ListGroup>
      <ListGroup>
        <SignoutButton />
      </ListGroup>
    </List>
  );
};

export default HeaderLogged;
