import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Artikkel from './pages/Artikkel';
import Tabel from './pages/Tabel';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='artikkel' element={ <Artikkel /> } />
        <Route path='tabel' element={ <Tabel /> } />
      </Routes>
    </div>
  );
}

export default App;
