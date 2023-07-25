import '../styles/NavigationBar.css'
import heroIcon from '../assets/planet.png'

const NavigationBar = () => {
  return (
    <nav className='navigation-bar'>
      <div className='left'>
        <img src={heroIcon} alt="space travelers icon"  className="hero-icon" />
        <h1>{"Space Traveler 's Hub"}</h1>
      </div>
      <ul className='right'>
        <li>
          <a href="/">Rockets</a>
        </li>
        <li>
          <a href="/missions">Missions</a>
        </li>
        <li>
          <a href="/my-profile">My Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
