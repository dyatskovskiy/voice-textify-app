import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classNames from "classnames";

interface FormFieldProps extends ComponentPropsWithoutRef<"label"> {
  children: ReactNode;
  className?: string;
  title: string;
}

export const FormField: FC<FormFieldProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <label>
      <span className={classNames("block", className)}>{title}</span>
      {children}
    </label>
  );
};
