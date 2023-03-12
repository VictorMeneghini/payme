import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading component", () => {
  it("renders without errors", () => {
    render(<Loading />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
