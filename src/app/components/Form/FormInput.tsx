import React, { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";
import { useFormContext } from "@/app/components/Form/FormContext";
interface FormInputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  initialValue?: string;
  className?: string;
  type?: string;
}
const FormInput: FC<FormInputProps> = ({
  name,
  className,
  type = "text",
  initialValue = "",
}) => {
  const { handleChange, formValues } = useFormContext();

  return (
    <input
      name={name}
      type={type}
      value={formValues[name] ?? initialValue}
      className={classNames(
        "rounded w-96 h-8 text-xl bg-primaryBg border border-borderColor focus:outline-none px-2 py-1",
        className,
      )}
      onChange={handleChange}
    />
  );
};

export default FormInput;
