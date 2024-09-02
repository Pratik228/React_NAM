import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/resCardMock.json";

it("Should render the restaurants info", () => {
  render(<RestaurantCard resList={MOCK_DATA} />);

  const ResName = screen.getByText("Young Restaurant");

  expect(ResName).toBeInTheDocument();
});
