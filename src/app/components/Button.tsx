import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = "submit",
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "block bg-primaryBg border border-borderColor hover:border-hoverColor rounded px-4 py-2 cursor-pointer disabled:text-disabledColor disabled:bg-globalBackground disabled:border-disabledColor",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
