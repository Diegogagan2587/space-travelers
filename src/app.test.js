// tests/sample.test.js
/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders "Hello, World!"', () => {
  render(<h1>Hi Buddy</h1>);
  const helloElement = screen.getByText('Hi Buddy');
  expect(helloElement).toBeInTheDocument();
});
