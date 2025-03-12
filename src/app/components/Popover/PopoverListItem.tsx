import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classNames from "classnames";
import { usePopoverContext } from "@/app/components/Popover/PopoverProvider";

interface PopoverListItemProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  children?: ReactNode;
}

export const PopoverListItem: FC<PopoverListItemProps> = ({
  className,
  children,
}) => {
  const props = usePopoverContext();

  return (
    <button
      onClick={() => {
        props.onClose();
      }}
      className={classNames("relative z-10", className)}
    >
      {children}
    </button>
  );
};
