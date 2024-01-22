import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Artikkel from './pages/Artikkel';
import Tabel from './pages/Tabel';

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <button className='nav-nupp'>Avaleht</button>
      </Link>
      <Link to='/artikkel'>
        <button className='nav-nupp'>Artikkel</button>
      </Link>
      <Link to='/tabel'>
        <button className='nav-nupp'>Tabel</button>
      </Link>
      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='artikkel' element={ <Artikkel /> } />
        <Route path='tabel' element={ <Tabel /> } />
      </Routes>
    </div>
  );
}

export default App;
