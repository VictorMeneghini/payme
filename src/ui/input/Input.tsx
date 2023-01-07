export type InputProps = {
  errorMessage?: string;
  type?: "text" | "number" | "password";
};

const Input = ({ errorMessage, type = "text" }: InputProps) => {
  return (
    <>
      <input type={type} data-testid="input-component" />
      {errorMessage && <span data-testid="error-span">{errorMessage}</span>}
    </>
  );
};

export { Input };
