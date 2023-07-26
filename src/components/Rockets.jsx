import { useEffect } from 'react';
import '../styles/Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state)=>state.rockets)
  console.log('indise Rockets compoenet', rockets)
  useEffect(()=>{
    dispatch(getRockets());
  },[dispatch]);
  return (
    <ul>
      {
        rockets.map((rocket)=> <Rocket key={rocket.id} rocketProps={rocket}></Rocket> )
      }
    </ul>
  );
};

export default Rockets;
