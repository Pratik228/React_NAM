import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../../mocks/resMockData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("testid");

  fireEvent.change(searchInput, { target: { value: "Santk" } });

  fireEvent.click(searchButton);

  const card = screen.getAllByTestId("resCard");

  expect(card.length).toBe(1);

  expect(searchButton).toBeInTheDocument();
});

it("Should render top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const searchTopRated = screen.getAllByTestId("resCard");

  expect(searchTopRated.length).toBe(7);
});
