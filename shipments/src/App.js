import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShipmentsDetails from './pages/ShipmentsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={ <HomePage /> }/>
        <Route path='details/:index' element={ <ShipmentsDetails /> }/>
      </Routes>
    </div>
  );
}

export default App;
