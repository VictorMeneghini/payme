import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";

import { Input } from "@/ui/input/Input";

function App() {
  const handleOnChange = (inputValue: string) => {
    console.log(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input
          onChange={(inputValue) => handleOnChange(inputValue)}
          errorMessage="invalid email"
        ></Input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
