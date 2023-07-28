// Path: src/pages/Missions.jsx
/* eslint-disable-next-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
// import '../styles/Missions.css';


const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(state => state.missions);

  const handleJoinBtn = (id) => {
    dispatch(joinMission(id));
  }

  const handleLeaveBtn = (id) => {
    dispatch(leaveMission(id));
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
          let memberStatus = mission.reserved === true ? 'active-member' : 'not-active-member';
          let memberStatusValue = mission.reserved === true ? 'Active Member' : 'NOT A MEMBER';
          let hideJoinMissionBtn = mission.reserved === true ? 'hide' : '';
          let hideLeaveMissionBtn = mission.reserved === false ? 'hide' : '';

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
                <button className={hideLeaveMissionBtn} onClick={() => handleLeaveBtn(mission.id)}>Leave Mission</button>
                <button className={hideJoinMissionBtn} onClick={() => handleJoinBtn(mission.id)}>Join Mission</button>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Missions;