import styles from "./Input.module.css";

export type InputProps = {
  errorMessage?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  onChange?: (inputValue: string) => void;
};

console.log(styles);

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
        placeholder={placeholder}
        className={styles.input}
        type={type}
        data-testid="input-component"
        onChange={(inputEvent) => onInputChange(inputEvent)}
      />
      {errorMessage && (
        <span className={styles.error} data-testid="error-span">
          {errorMessage}
        </span>
      )}
    </>
  );
};

export { Input };
