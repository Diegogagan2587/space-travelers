/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Rocket from '../components/Rocket';
import store from '../redux/store';

describe('Renders Content', () => {
  test('Should there be a Reserve Rocket button', () => {
    const rocketData = {
      rocket_name: 'Diego Rocket',
      flickr_images: ['#'],
      reserved: false,
      description: 'Rocket create to test the React Component Rocket.jsx',
      id: 27,
      rocket_type: 'Cheaper Rocket',
    };
    const component = render(
      <Provider store={store}>
        <Rocket rocketProps={rocketData} />
      </Provider>
    );
    const reserveBtn = screen.getByText('Reserve Rocket');
    expect(reserveBtn).toBeInTheDocument();
  });
});
