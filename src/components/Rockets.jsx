import '../styles/Rockets.css';

const Rockets = () => {
  return (
    <ul>
      <li className="rocket-container">
        <div>Picture would be here</div>
        <div className="rocket-data">
            <h2 className="name">Rocket Name</h2>
            <p className="description">Description</p>
            <button className="reserve-btn">Reserve Rocket</button>
        </div>
      </li>
      <li className="rocket-container">
        <span>Picture would be here</span>
        <div className="rocket-data">
            <h2 className="name">Rocket Name</h2>
            <p className="description">Description</p>
            <button className="cancel-btn">Cancel Reservation</button>
        </div>
      </li>
      <li className="rocket-container">
        <span>Picture would be here</span>
        <div className="rocket-data">
            <h2 className="name">Rocket Name</h2>
            <p className="description">Description</p>
            <button className="reserve-btn">Reserve Rocket</button>
        </div>
      </li>
    </ul>
  );
};

export default Rockets;
