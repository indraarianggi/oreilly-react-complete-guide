import { render, screen } from "@testing-library/react";
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
});
