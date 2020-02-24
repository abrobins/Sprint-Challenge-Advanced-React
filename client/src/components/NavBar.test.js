import React from "react";
import { render } from "@testing-library/react";

import NavBar from "./NavBar";

test("contains a test-id for navbar dark mode toggle", () => {
  const { getByTestId } = render(<NavBar />);
  const darkMode = getByTestId("dark-mode-toggle");
});

test("contains a test-id for entire navbar ", () => {
  const { getByTestId } = render(<NavBar />);
  const darkMode = getByTestId("navbar");
});
