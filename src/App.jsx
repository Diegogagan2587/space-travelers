import './App.css';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Missions from './pages/Missions';
import Rockets from './components/Rockets';
import MyProfile from './pages/MyProfile';

function App() {
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
