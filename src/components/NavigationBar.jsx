import { NavLink } from 'react-router-dom';
 /* eslint-disable-next-line */
 import React from 'react';

const NavigationBar = () => {
  return (
    <nav className='navigation-bar'>
      <div className='left'>
        <img src="https://i.imgur.com/vs7k8UQ.png" alt="space travelers icon" className="hero-icon" />
        <h1>Space Traveler &#39;s Hub </h1>
      </div>
      <ul className='right'>
        <li>
          <NavLink
            to="/rockets"
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
