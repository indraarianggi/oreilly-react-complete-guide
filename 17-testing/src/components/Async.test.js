import { render, screen } from "@testing-library/react";
import { Mock } from "jest";
import Async from "./Async";

describe("<Async /> component", () => {
  /**
   * testing asynchronous code (fetch data in useEffect)
   */
  test("should renders posts if request succeeds", async () => {
    // Mocking fetch function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        },
      ],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
