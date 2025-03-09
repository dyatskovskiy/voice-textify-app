import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";

interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  return (
    <svg
      className={classNames(
        "h-4 w-4 fill-globalForeground stroke-transparent",
        className,
      )}
    >
      <use href={`/images/icons.svg#${name}`} />
    </svg>
  );
};
