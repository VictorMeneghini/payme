import React, { useState } from "react";
import "./styles/variables.css";

import { Input } from "@/ui/input/Input";

function App() {
  const [value, setValue] = useState("");
  const handleOnChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <div className="App">
      <Input
        placeholder="type"
        onChange={(inputValue) => handleOnChange(inputValue)}
        errorMessage="invalid email"
      ></Input>
    </div>
  );
}

export default App;
