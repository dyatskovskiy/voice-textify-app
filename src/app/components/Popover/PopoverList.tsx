import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { usePopoverContext } from "@/app/components/Popover/PopoverProvider";
import useOnClickOutside from "@/app/hooks/useOnClickOutside";
import classNames from "classnames";

interface PopoverListProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export const PopoverList: FC<PopoverListProps> = ({
  children,
  className,
  ...rest
}) => {
  const props = usePopoverContext();
  const ref = useOnClickOutside(props.onClose);

  if (!props.isOpen) return null;

  return (
    <div {...rest} ref={ref} className={classNames("absolute z-50", className)}>
      {children}
    </div>
  );
};
