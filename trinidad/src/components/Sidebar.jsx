import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className='container'>
      <div className="sidebar">
        <h1 className="logo">Logo</h1>
        <ul>
          <li><Link to='/'>
            <button className='nav-nupp'>Avaleht</button>
          </Link></li>
          <li><Link to='/artikkel'>
            <button className='nav-nupp'>Artikkel</button>
          </Link></li>
          <li><Link to='/tabel'>
            <button className='nav-nupp'>Tabel</button>
          </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar