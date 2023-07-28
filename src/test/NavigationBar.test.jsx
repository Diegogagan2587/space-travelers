 /* eslint-disable-next-line */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

test('renders NavigationBar with navigation links', () => {
  const component = render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>
  );

  // Check if the navigation links are rendered and have the correct text
  const rocketsLink = screen.getByRole('link', { name: /rockets/i });
  const missionsLink = screen.getByRole('link', { name: /missions/i });
  const myProfileLink = screen.getByRole('link', { name: /my profile/i });

  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(myProfileLink).toBeInTheDocument();

  // Check if the navigation links have the correct 'to' attribute values
  expect(rocketsLink).toHaveAttribute('href', '/rockets');
  expect(missionsLink).toHaveAttribute('href', '/missions');
  expect(myProfileLink).toHaveAttribute('href', '/my-profile');

  console.log(component);
  // component.debug();
});
