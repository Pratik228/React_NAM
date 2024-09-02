import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });
  test("Should load contact us component", () => {
    render(<Contacts />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load Button", () => {
    render(<Contacts />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contacts />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).t;
  });
});
