import './App.css';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Missions from './pages/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Rockets/>} />
        <Route path="/rockets" element={<Rockets/>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<h1>My Profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
