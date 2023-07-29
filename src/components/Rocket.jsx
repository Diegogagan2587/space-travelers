/* eslint-disable-next-line */
import React from 'react';
import PropTypes from 'prop-types';
import {
  reserveRocket,
  cancelReservation,
} from '../redux/rockets/rocketsSlice';
import { useDispatch } from 'react-redux';

const Rocket = ({ rocketProps }) => {
  const {
    rocket_name,
    flickr_images,
    reserved = false,
    description,
    id,
  } = rocketProps;
  const dispatch = useDispatch();
  return (
    <li className="rocket-container">
      <img src={flickr_images[0]} alt="rocket image" />
      <div className="rocket-data">
        <h2 className="name">{rocket_name}</h2>
        <p className="description">
          {reserved&&( <span className="reserved-badge">Reserved</span> )}
          {description}
          </p>
        {reserved && (
          <button
            className="cancel-btn"
            onClick={() => dispatch(cancelReservation(id))}
          >
            Cancel Reservation
          </button>
        )}
        {!reserved && (
          <button
            className="reserve-btn"
            onClick={() => {
              dispatch(reserveRocket(id));
            }}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    rocket_type: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
