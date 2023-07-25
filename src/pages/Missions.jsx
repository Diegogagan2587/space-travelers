import '../styles/Missions.css';

const missionsArray = [
  {
    name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    status: 'NOT A MEMBER'
  },
  {
    name: 'Telstar',
    description: 'Telstar is the name of various communications satellites. The first two Telstar satellites were experimental and nearly identical. Telstar 1 launched on top of a Thor-Delta rocket on July 10, 1962. It successfully relayed through space the first television pictures, telephone calls, and telegraph images, and provided the first live transatlantic television feed. Telstar 2 launched May 7, 1963. Telstar 1 and 2—though no longer functional—still orbit the Earth.',
    status: 'Active Member'
  },
  {
    name: 'Athena',
    description: 'Athena is a family of American expendable space launch vehicles developed by Lockheed Martin Space Systems in the 1990s. They were derivatives of the PGM-17 Thor missile. Athena rockets were used to launch small satellites into low Earth orbit between 1995 and 2001.',
    status: 'Active Member'
  },
];

const Missions = () => {
  return (
    <div className="missions">
      <div className="head">
        <span className='first-column'>Mission</span>
        <span className='second-column'>Description</span>
        <span className='third-column'>Status</span>
        <span className='fourth-column'></span>
      </div>
      <div className="missions-list">
        {missionsArray.map((mission, index) => {
          let memberStatus = mission.status === 'Active Member' ? 'active-member' : 'not-active-member';
          let hideJoinMissionBtn = mission.status === 'Active Member' ? 'hide' : '';
          let hideLeaveMissionBtn = mission.status === 'NOT A MEMBER' ? 'hide' : '';

          return (
          <div className="mission" key={index}>
            <div className='first-column'>{mission.name}</div>
            <div className='second-column'>{mission.description}</div>
            <div className="third-column mission-status">
              <div className={memberStatus}>
                {mission.status}
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