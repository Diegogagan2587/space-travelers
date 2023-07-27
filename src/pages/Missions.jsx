// Path: src/pages/Missions.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';

import '../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(state => state.missions);

  // useEffect(() => {
  //   console.log(missions.missions);
  // }, [missions]);

  const handleJoinBtn = (e) => {
    e.preventDefault();
    dispatch(joinMission(e.target.id));

  }

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
                <button className={hideJoinMissionBtn} id={mission.id} onClick={handleJoinBtn}>Join Mission</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Missions;