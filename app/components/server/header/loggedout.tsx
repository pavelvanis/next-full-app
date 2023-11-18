import { LogInIcon } from "lucide-react";
import ListGroup from "../../list/listgroup";
import ListItem from "../../list/listitem";
import { CloseButton } from "./closebutton";
import List from "../../list/list";

const HeaderLoggedOut: React.FC<{
  closeHandler: Function;
}> = ({ closeHandler }): JSX.Element => {
  return (
    <List className=" divide-slate-600">
      <ListGroup>
        <ListItem as="div" className="py-1 ps-2 h-12 hover:bg-transparent">
          <div className="flex items-center justify-end w-full">
            <CloseButton onClick={closeHandler} />
          </div>
        </ListItem>
        <ListItem
          as="a"
          href="/login"
          className=" bg-blue-500 hover:bg-blue-600 text-white justify-center"
          onClick={closeHandler}
        >
          <div className="flex gap-1 items-center">
            <LogInIcon className="p-[.2rem]" />
            <span className="pt-[.2rem]">Login</span>
          </div>
        </ListItem>
        <ListItem
          as="a"
          href="/signup"
          className=" bg-blue-500 hover:bg-blue-600 text-white justify-center"
          onClick={closeHandler}
        >
          <span className="pt-[.2rem]">Sign up</span>
        </ListItem>
      </ListGroup>
    </List>
  );
};

export default HeaderLoggedOut;
