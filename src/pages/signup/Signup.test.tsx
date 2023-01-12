import React from "react";
import { render, screen } from "@testing-library/react";
import { Signup } from "./Signup";

test("renders learn react link", () => {
  render(<Signup />);
  const linkElement = screen.getByTestId("signup-form");
  expect(linkElement).toBeInTheDocument();
});
