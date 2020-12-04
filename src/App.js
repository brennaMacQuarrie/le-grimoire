import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/styles.css';
import Routes from './components/routes';
import Sidebar from './components/sidebar';




export default function App() {
  const location = useLocation();

  // const [entries, setUserEntries] = useState([]);
  // const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState(undefined);


  // for sidebar open
  const [viewSidebar, setViewSidebar] = useState(false); 
  const toggleSidebar = () => setViewSidebar(!viewSidebar);

  const getUser = useCallback(async function() {
    try {
      const response = await fetch('http://localhost:3000/users/me');
      const json = await response.json();
      if (!response.ok) {
        throw new Error;
      }
      setUserId(json.data);
    } catch (err) {
      console.log('error');
      setUserId(undefined);
      console.log({ err });
    }
  }, [])

  useEffect(() => {
    getUser();
  }, [getUser])

  return (
    <div className="App">

      { (location.pathname !== '/') ? (
        <Link className="homeLink" to='/'>home</Link>
      ) : null
      }

      <Routes viewMenu={viewSidebar}
              toggleMenu={toggleSidebar}
              getUser={getUser}
              updateUser={setUserId} />

      <Sidebar view={viewSidebar} 
              toggleMenu={toggleSidebar} />

    </div>
  );
}

