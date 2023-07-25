import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavigationBar.css';
import heroIcon from '../assets/planet.png';

const NavigationBar = () => {
  return (
    <nav className='navigation-bar'>
      <div className='left'>
        <img src={heroIcon} alt="space travelers icon" className="hero-icon" />
        <h1>Space Traveler's Hub</h1>
      </div>
      <ul className='right'>
        <li>
          <NavLink
            to="/"
            className={({ isActive}) =>
             isActive ? "active" : ""
            }
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className={({ isActive}) =>
              isActive ? "active" : ""
            }
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-profile"
            className={({ isActive}) =>
              isActive ? "active" : ""
            }
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
