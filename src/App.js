import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/styles.css';
import Routes from './components/Routes';
import Sidebar from './components/Sidebar';




export default function App() {
  const location = useLocation();
  // for sidebar open
  const [viewSidebar, setViewSidebar] = useState(false); 
  const toggleSidebar = () => setViewSidebar(!viewSidebar);

  const [userId, setUserId] = useState(undefined);



  const getUser = useCallback(async function() {
    try {
      const response = await fetch('http://localhost:3000/users/me');
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      // console.log(json.data); << object w id, name, email
      setUserId(json.data);
    } catch (err) {
      console.log('error:', err);
      setUserId(undefined);
    }
  }, [])

  useEffect(() => {
    getUser();
  }, [getUser])

  return (
    <div className="App">

      { 
        (location.pathname !== '/' && !viewSidebar) ? 
        ( <Link className="homeLink" to='/'>Home</Link> ) : 
        null 
      }

      <Routes viewMenu={viewSidebar}
              toggleMenu={toggleSidebar}
              getUser={getUser}
              updateUser={setUserId} 
              me={userId} />

      <Sidebar view={viewSidebar} 
              toggleMenu={toggleSidebar} />

    </div>
  );
}

