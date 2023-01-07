import { useState, useEffect } from "react";

export const DEFAULT_DEBOUNCE_TIME = 400;

export const useDebounce = (
  value: string,
  milliSeconds: number = DEFAULT_DEBOUNCE_TIME
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  console.log(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};
