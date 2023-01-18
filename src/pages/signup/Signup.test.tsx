import React from "react";
import { render, screen } from "@testing-library/react";
import { Signup } from "./Signup";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Signup form", () => {
  test("Should render Signup form property", () => {
    render(<Signup />);
    const linkElement = screen.getByTestId("signup-form");
    expect(linkElement).toBeInTheDocument();
  });

  test("Should show loading when form is submitting", async () => {
    render(<Signup />);

    const btn = screen.getByRole("button");
    const [nameInput, emailInput, passwordInput] =
      screen.getAllByTestId("input-component");

    userEvent.type(nameInput, "novo");
    userEvent.type(emailInput, "novo@mail.com");
    userEvent.type(passwordInput, "1234564");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      userEvent.click(btn);
    });

    expect(await screen.findByTestId("loading")).toBeDefined();
  });

  test("Should clear input values after submit", async () => {
    const calledMock = jest.fn();
    render(<Signup onSubmit={calledMock} />);

    const btn = screen.getByRole("button");
    const [nameInput, emailInput, passwordInput] =
      screen.getAllByTestId("input-component");

    userEvent.type(nameInput, "novo");
    userEvent.type(emailInput, "novo@mail.com");
    userEvent.type(passwordInput, "123456");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      userEvent.click(btn);
    });

    expect(calledMock).toHaveBeenCalledWith({
      name: "novo",
      email: "novo@mail.com",
      password: "123456",
    });
  });
});
