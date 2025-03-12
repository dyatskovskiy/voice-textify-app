import React, { ChangeEvent, FC, FormEvent, ReactNode, useState } from "react";
import classNames from "classnames";
import { FormContext } from "./FormContext";
import type { FormValues } from "./FormContext";
import { FormField } from "@/app/components/Form/FormField";
import FormInput from "@/app/components/Form/FormInput";
import FormSubmitButton from "@/app/components/Form/FormSubmitButton";

interface FormComponentProps {
  onSubmit: (values: FormValues) => void;
  children?: ReactNode;
  className?: string;
}

const FormComponent: FC<FormComponentProps> = ({
  children,
  className,
  onSubmit,
}) => {
  const [values, setValues] = useState<FormValues>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues: FormValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <FormContext.Provider
      value={{ formValues: values, handleChange, handleSubmit }}
    >
      <form onSubmit={handleSubmit} className={classNames("", className)}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const Form = Object.assign(FormComponent, {
  Field: FormField,
  Input: FormInput,
  SubmitButton: FormSubmitButton,
});
