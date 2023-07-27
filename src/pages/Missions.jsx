import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../styles/Missions.css';

const Missions = () => {
  const missions = useSelector(state => state.missions);

  useEffect(() => {
    console.log(missions.missions);
  }, [missions]);

  return (
    <div className="missions">
      <div className="head">
        <span className='first-column'>Mission</span>
        <span className='second-column'>Description</span>
        <span className='third-column'>Status</span>
        <span className='fourth-column'></span>
      </div>
      <div className="missions-list">
        {missions.missions.map((mission, index) => {
          let memberStatus = mission.status === true ? 'active-member' : 'not-active-member';
          let memberStatusValue = mission.status === true ? 'Active Member' : 'NOT A MEMBER';
          let hideJoinMissionBtn = mission.status === true ? 'hide' : '';
          let hideLeaveMissionBtn = mission.status === false ? 'hide' : '';

          return (
            <div className="mission" key={index}>
              <div className='first-column'>{mission.name}</div>
              <div className='second-column'>{mission.description}</div>
              <div className="third-column mission-status">
                <div className={memberStatus}>
                  {memberStatusValue}
                </div>
              </div>
              <div className='fourth-column btn'>
                <button className={hideLeaveMissionBtn}>Leave Mission</button>
                <button className={hideJoinMissionBtn}>Join Mission</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Missions;