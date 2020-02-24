import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Contains player list header", () => {
  const { getByText } = render(<App />);
  getByText("Player List");
});

test("Contains player list data", () => {
  const { getByTestId } = render(<App />);
  const playerList = getByTestId("player-list");
});
