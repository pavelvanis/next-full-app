import { motion } from "framer-motion";
import { XIcon } from "lucide-react";

export const CloseButton = ({
  onClick,
}: {
  onClick: Function;
}) => {
  return (
    <motion.button
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.37 }}
      onClick={() => onClick()}
      className="p-1 rounded-lg hover:bg-blue-30 "
    >
      <XIcon className="self-start h-6 w-6" width={"2.5rem"} />
    </motion.button>
  );
};
