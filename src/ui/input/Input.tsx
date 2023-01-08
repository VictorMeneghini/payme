export type InputProps = {
  errorMessage?: string;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  onChange?: (inputValue: string) => void;
};

const Input = ({
  errorMessage,
  type = "text",
  placeholder,
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
          errorMessage
            ? "border-red-600 focus:border-red-500 ring-red-500"
            : "border-gray-900 focus:ring-gray-900 ring-gray-900"
        }`}
        placeholder={placeholder}
        type={type}
        data-testid="input-component"
        onChange={(inputEvent) => onInputChange(inputEvent)}
      />
      {errorMessage && (
        <span className="text-red-600 m-1" data-testid="error-span">
          {errorMessage}
        </span>
      )}
    </>
  );
};

export { Input };
