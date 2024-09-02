import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/restaurantMenu.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(<RestaurantMenu />);
  });

  const accordianHeader = screen.getByText("Veg");

  fireEvent.click(accordianHeader);
});
