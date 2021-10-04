import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greeting /> component", () => {
  test("should renders hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('should renders "good to see you" if the button NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const textElement = screen.getByText("good to see you", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test('should renders "changed" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textElement = screen.getByText("Changed!", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test('should does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(textElement).toBeNull();
  });
});
