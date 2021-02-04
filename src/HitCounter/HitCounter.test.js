import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import HitCounter from "./index";

describe('on mount', () => {
  test('renders the button', () => {
    const { getByRole } = render(<HitCounter btnText="Counter total: " />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  test("click increases number", () => {
    const { getByRole, getByText } = render(<HitCounter btnText="Counter total: " />);
    fireEvent.click(getByRole('button'));
    expect(getByText(/1/)).toHaveTextContent('1');
  });
});
