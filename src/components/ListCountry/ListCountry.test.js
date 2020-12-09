import React from "react";
import {
  wait,
  getByText,  
  render,
  getByTestId,
  getByRole,
  getAllByTestId,
  waitForElementToBeRemoved
} from "@testing-library/react";
import ListCountry from "./ListCountry";

describe("ListCountry", () => {



  test('render "no countries message" when there are no countries', () => {
    const { container } = render(<ListCountry />);
    const containerWrapper = container;
    expect(getByText(containerWrapper, /no countries/i)).toBeInTheDocument();
  });


});
