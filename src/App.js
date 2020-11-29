import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/styles.css';
import Routes from './components/routes';
import Sidebar from './components/sidebar';




export default function App() {
  const location = useLocation();

  // const [entries, setUserEntries] = useState([]);
  // const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState(10);


  // for sidebar open
  const [viewSidebar, setViewSidebar] = useState(false); 
  const toggleSidebar = () => setViewSidebar(!viewSidebar);


  return (
    <div className="App">

      { (location.pathname !== '/') ? (
        <Link className="homeLink" to='/'>home</Link>
      ) : null
      }

      <Routes viewMenu={viewSidebar}
              toggleMenu={toggleSidebar} />

      <Sidebar view={viewSidebar} 
              toggleMenu={toggleSidebar} />

    </div>
  );
}

