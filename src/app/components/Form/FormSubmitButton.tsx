import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import Button from "@/app/components/Button";

interface FormSubmitButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  className?: string;
}

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Button {...rest} type="submit" className={className}>
      {children}
    </Button>
  );
};

export default FormSubmitButton;
