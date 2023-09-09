import React from "react";
import { render, fireEvent, screen, waitFor, getByAltText } from '@testing-library/react';
import MockAdapter from "axios-mock-adapter";
import axios from 'axios';
import Generator from './Generator';

// smoke test 
describe('Generator component', () => {
  it("renders without crashing", () => {
    render(<Generator />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Generator />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('should update selectedButton and selectedOption on button click', () => {
    render(<Generator />);

    const trackButton = screen.getByTestId('track-button');

    fireEvent.click(trackButton);
    expect(trackButton).toHaveClass('btn-selected');
  });
});
