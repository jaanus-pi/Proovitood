import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShipmentDetails from './pages/ShipmentDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={ <HomePage /> }/>
        <Route path='details/:index' element={ <ShipmentDetails /> }/>
      </Routes>
    </div>
  );
}

export default App;
