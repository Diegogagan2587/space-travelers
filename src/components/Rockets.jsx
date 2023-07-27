
import '../styles/Rockets.css';
import { useSelector } from 'react-redux';

import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state)=>state.rockets);
  
  return (
    <ul className="rockets-list">
      {
        rockets.map((rocket)=> <Rocket key={rocket.id} rocketProps={rocket}></Rocket> )
      }
    </ul>
  );
};

export default Rockets;
