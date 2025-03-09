import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useState,
} from "react";
import classNames from "classnames";
import { PopoverContext } from "@/app/components/Popover/PopoverProvider";
import { PopoverButton } from "@/app/components/Popover/PopoverButton";
import { PopoverList } from "@/app/components/Popover/PopoverList";
import { PopoverListItem } from "@/app/components/Popover/PopoverListItem";

interface PopoverComponentProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children?: ReactNode;
}

const PopoverComponent: FC<PopoverComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    console.log("onOpen");
    setIsOpen(true);
  };
  const onClose = () => {
    console.log("onClose");
    setIsOpen(false);
  };

  return (
    <PopoverContext.Provider value={{ isOpen, onOpen, onClose }}>
      <div {...rest} className={classNames("", className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});
