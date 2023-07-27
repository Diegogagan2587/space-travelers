import { useSelector } from "react-redux";

const MyProfile = () => {
    const rockets = useSelector((state)=>state.rockets);
    console.log('rockets = ',rockets)
  return (
    <div className="my-profile-container">
      <div className="reserved-rockets-container">
        <ul className="rockets-list">
            <h2>My Rockets</h2>
            {rockets.map((rocket) => {
                if(rocket.reserved) {return <li key={rocket.id}>{rocket.rocket_name}</li>}
                return null
            })}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
