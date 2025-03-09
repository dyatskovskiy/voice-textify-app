import { createContext, useContext } from "react";

interface PopoverContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const PopoverContext = createContext<PopoverContextProps>(null!);

export const usePopoverContext = () => {
  const props = useContext(PopoverContext);

  if (!props) {
    throw new Error("No popover context provided");
  }

  return props;
};
