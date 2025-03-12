import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classNames from "classnames";
import { useFormContext } from "@/app/components/Form/FormContext";

interface FormSubmitButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  className?: string;
}

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { formValues } = useFormContext();

  const isFormEmpty = Object.keys(formValues).length === 0;

  return (
    <button
      type="submit"
      {...rest}
      className={classNames(
        "bg-primaryBg border border-borderColor hover:border-hoverColor rounded px-4 py-2 cursor-pointer disabled:text-disabledColor disabled:bg-globalBackground disabled:border-disabledColor",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default FormSubmitButton;
