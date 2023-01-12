import { InputHTMLAttributes } from "react";

import {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

export type InputProps = {
  id: string;
  errorMessage?: FieldError;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  rules?: RegisterOptions;
  register: UseFormRegister<FieldValues>;
  onChange?: (inputValue: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  type = "text",
  id,
  errorMessage,
  placeholder,
  rules,
  register,
  onChange,
}: InputProps) => {
  console.log("rerender");

  const onInputChange = (inputEvent: React.FormEvent<HTMLInputElement>) => {
    let target = inputEvent.target as HTMLInputElement;

    if (onChange) {
      onChange(target.value);
    }
  };

  return (
    <>
      <input
        className={`${
          errorMessage?.message
            ? "border-red-600 focus:border-red-500 ring-red-500"
            : "border-gray-900 focus:ring-gray-900 ring-gray-900"
        }`}
        placeholder={placeholder}
        type={type}
        {...register(id, { ...rules })}
        data-testid="input-component"
        onChange={(inputEvent) => onInputChange(inputEvent)}
      />
      {errorMessage?.message && (
        <span className="text-red-600 m-1" data-testid="error-span">
          {errorMessage.message}
        </span>
      )}
    </>
  );
};

export { Input };
