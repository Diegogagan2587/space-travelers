import './App.css';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Missions from './pages/Missions';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<h1>My Profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
