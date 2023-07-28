import '../styles/MyProfile.css';
import { useSelector } from "react-redux";


const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missions);
  console.log('rockets = ', rockets)
  console.log('missions = ', missions)
  return (
    <div className="my-profile-container">
      <div className="reserved-rockets-container">
      <h2>My Missions</h2>
        <ul className="reserved-list">
          {missions.filter((mission) => mission.reserved).map((mission) => {
            { return <li key={mission.id}>{mission.name}</li> }
          })}
        </ul>
      </div>
      <div className="reserved-rockets-container">
      <h2>My Rockets</h2>
        <ul className="reserved-list">
          {rockets.filter((rocket) => rocket.reserved).map((rocket) => {
            { return <li key={rocket.id}>{rocket.rocket_name}</li> }
          })}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
