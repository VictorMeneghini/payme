import React from "react";
import { render, screen } from "@testing-library/react";
import { Input, InputProps } from "./Input";

const componentUnderTestFactory = (props: InputProps = {}) => {
  render(<Input {...props} />);
};

describe("Input component", () => {
  test("Should be defined", () => {
    componentUnderTestFactory();
    const linkElement = screen.getByTestId("input-component");
    expect(linkElement).toBeInTheDocument();
  });

  test("Should dont see span error if it not has error", () => {
    componentUnderTestFactory();
    const linkElement = screen.queryByTestId("error-span");
    expect(linkElement).not.toBeInTheDocument();
  });

  test("Should see span error if it not has error", () => {
    componentUnderTestFactory({ errorMessage: "some error" });
    const linkElement = screen.queryByTestId("error-span");
    expect(linkElement).toBeInTheDocument();
  });

  test("Should render input according the type", () => {
    componentUnderTestFactory();
    const linkElement = screen.queryByTestId(
      "input-component"
    ) as HTMLInputElement;
    expect(linkElement.type).toBe("text");
  });
});