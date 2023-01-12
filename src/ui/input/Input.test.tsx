import { render, screen } from "@testing-library/react";
import { Input, InputProps } from "./Input";

const DEFAULT_PROPS = {
  id: "mocke_id",
  register: jest.fn(),
};

const componentUnderTestFactory = (props: InputProps) => {
  render(<Input {...props} />);
};

describe("Input component", () => {
  test("Should be defined", () => {
    const mockRegister = jest.fn();

    componentUnderTestFactory({
      id: "name",
      register: mockRegister,
    });
    const linkElement = screen.getByTestId("input-component");
    expect(linkElement).toBeInTheDocument();
  });

  test("Should dont see span error if it has no errors", () => {
    componentUnderTestFactory({ ...DEFAULT_PROPS });
    const linkElement = screen.queryByTestId("error-span");
    expect(linkElement).not.toBeInTheDocument();
  });

  test("Should see span error if it has error", () => {
    componentUnderTestFactory({
      ...DEFAULT_PROPS,
      errorMessage: {
        message: "mock_message_required",
        type: "required",
      },
    });
    const linkElement = screen.queryByTestId("error-span");
    expect(linkElement).toBeInTheDocument();
  });

  test("Should render input type properly. type = text", () => {
    componentUnderTestFactory({ ...DEFAULT_PROPS });
    const linkElement = screen.queryByTestId(
      "input-component"
    ) as HTMLInputElement;
    componentUnderTestFactory({ ...DEFAULT_PROPS, type: "text" });
    expect(linkElement.type).toBe("text");
  });

  test("Should render input type properly. type = email", () => {
    componentUnderTestFactory({ ...DEFAULT_PROPS, type: "email" });
    const linkElement = screen.queryByTestId(
      "input-component"
    ) as HTMLInputElement;
    componentUnderTestFactory({ ...DEFAULT_PROPS, type: "email" });
    expect(linkElement.type).toBe("email");
  });

  test("Should render input type properly. type = password", () => {
    componentUnderTestFactory({ ...DEFAULT_PROPS, type: "password" });
    const linkElement = screen.queryByTestId(
      "input-component"
    ) as HTMLInputElement;
    componentUnderTestFactory({ ...DEFAULT_PROPS, type: "password" });
    expect(linkElement.type).toBe("password");
  });

  test("Should render input type default as text", () => {
    componentUnderTestFactory({ ...DEFAULT_PROPS });
    const linkElement = screen.queryByTestId(
      "input-component"
    ) as HTMLInputElement;
    componentUnderTestFactory({ ...DEFAULT_PROPS, type: "text" });
    expect(linkElement.type).toBe("text");
  });
});
