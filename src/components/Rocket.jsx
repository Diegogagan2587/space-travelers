import PropTypes from 'prop-types';

const Rocket = ({ rocketProps }) => {
    const { rocket_name, flickr_images , isReserved=false, description} = rocketProps;
    if(isReserved){
      return (
        <li className="rocket-container">
          <img src={flickr_images[0]} alt="rocket image" />
          <div className="rocket-data">
          <h2 className="name">{rocket_name}</h2>
              <p className="description">{description}</p>
              <button className="cancel-btn">Cancel Reservation</button>
          </div>
        </li>
      )
    } else {
      return (
        <li className="rocket-container">
          <img src={flickr_images[1]} alt="rocket image" />
          <div className="rocket-data">
              <h2 className="name">{rocket_name}</h2>
              <p className="description">{description}</p>
              <button className="reserve-btn">Reserve Rocket</button>
          </div>
        </li>
      )
    }
  }

  Rocket.propTypes = {
    rocketProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      rocket_name: PropTypes.string.isRequired,
      rocket_type: PropTypes.string.isRequired,
      flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
      isReserved: PropTypes.bool,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default Rocket;