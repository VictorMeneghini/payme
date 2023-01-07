export type InputProps = {
  errorMessage?: string;
  type?: "text" | "number" | "password";
  onChange?: (inputValue: string) => void;
};

const Input = ({ errorMessage, type = "text", onChange }: InputProps) => {
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
        type={type}
        data-testid="input-component"
        onChange={(inputEvent) => onInputChange(inputEvent)}
      />
      {errorMessage && <span data-testid="error-span">{errorMessage}</span>}
    </>
  );
};

export { Input };
