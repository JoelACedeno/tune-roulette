import React from "react";
import { render } from '@testing-library/react';
import Generator from './Generator';
import axios from "axios";

// smoke test 
it("renders without crashing", () => {
  render(<Generator />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<Generator />);
  expect(asFragment()).toMatchSnapshot();
})