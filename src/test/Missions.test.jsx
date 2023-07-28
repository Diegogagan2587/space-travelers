// Import necessary testing libraries and dependencies
/* eslint-disable-next-line */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../pages/Missions'; // Update the path based on your project structure

// Create a mock Redux store with an initial state that resembles your real store
const mockStore = configureStore([]);

describe('Missions Component', () => {
  it('renders missions with correct data', () => {
    // Define a mock state that resembles your real store state
    const initialState = {
      missions: {
        missions: [
          {
            id: 1,
            name: 'Mission 1',
            description: 'Description for Mission 1',
            reserved: true,
          },
        ],
      },
    };

    // Create the mock store with the initial state
    const store = mockStore(initialState);

    // Render the component with the mocked store
    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    // Test that both missions are rendered on the screen
    const mission1 = screen.getByText('Mission 1');
    expect(mission1).toBeInTheDocument();

    // Test that the join and leave buttons are rendered correctly based on the reserved status
    const joinButton = screen.getByText('Join Mission');
    const leaveButton = screen.getByText('Leave Mission');
    expect(joinButton).toHaveClass('hide');
    expect(leaveButton).not.toHaveClass('hide');
  });

  
});
