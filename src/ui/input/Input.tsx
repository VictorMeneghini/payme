export type InputProps = {
  errorMessage?: string;
};

const Input = ({ errorMessage }: InputProps) => {
  return (
    <>
      <input type="text" data-testid="input-component" />
      {errorMessage && <span data-testid="error-span">{errorMessage}</span>}
    </>
  );
};

export { Input };
