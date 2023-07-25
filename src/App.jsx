import './App.css';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Rockets</h1>} />
        <Route path="/rockets" element={<Rockets/>} />
        <Route path="/missions" element={<h1>Missions</h1>} />
        <Route path="/my-profile" element={<h1>My Profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
