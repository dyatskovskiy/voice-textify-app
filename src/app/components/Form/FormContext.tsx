import { ChangeEvent, createContext, FormEvent, useContext } from "react";

export type FormValues = Record<string, string | number | undefined>;

interface FormContextProps {
  formValues: FormValues;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const FormContext = createContext<FormContextProps>(null!);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("This component should be used within a <Form> component");
  }

  return context;
};
