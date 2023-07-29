import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getRockets } from './redux/rockets/rocketsSlice';
import { fetchMissions } from './redux/missions/missionsSlice';
import NavigationBar from './components/NavigationBar';
import Missions from './pages/Missions';
import Rockets from './components/Rockets';
import MyProfile from './pages/MyProfile';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getRockets());
    dispatch(fetchMissions());
  },[dispatch]);
  
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Rockets/>} />
        <Route path="/rockets" element={<Rockets/>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
