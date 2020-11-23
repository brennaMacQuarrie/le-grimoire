import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './css/styles.css';

import Sidebar from './components/sidebar';

import Home from './pages/home';
import Background from './assets/Feb26_BloomGeneration-2322.jpg';
import Astro from './pages/astro';
import Symbols from './pages/symbols';
import Tarot from './pages/tarot';
import Crystals from './pages/crystals';
import Rituals from './pages/rituals';
import Spells from './pages/spells';
import Herbs from './pages/herbs';
import Entries from './pages/entries';
import LogIn from './pages/logIn';
import SignUp from './pages/signUp';



export default function App() {

  const [entries, setUserEntries] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState(10);
  const [viewMenu, setViewMenu] = useState(false); 
  // viewMenu fn toggles boolean

  const toggleMenu = () => setViewMenu(!viewMenu);



  return (
    <div className="App">

      <Switch>
        <Route path="/astro" 
          render={() => <Astro  />} 
                />
        <Route path="/symbols" 
                render={() => <Symbols />}
                />
        <Route path="/tarot"
          render={() => <Tarot  />}
                />
        <Route path="/crystals"
          render={() => <Crystals  />}
                />
        <Route path="/rituals"
          render={() => <Rituals  />}
                />
        <Route path="/spells"
          render={() => <Spells  />}
                />
        <Route path="/herbs"
          render={() => <Herbs  />}
                />
        <Route path="/entries"
          render={() => <Entries />}
                />

        {/* HOMEPAGE */}
        <Route path="/"
          render={() => <Home viewMenu= { viewMenu }
              toggleMenu={toggleMenu} />}
               /> 
  
          {/* <div className="homePage" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>
            <div className="content">

              <h1>le grimoire</h1>

              <div className="actions">
                
                <button className="signUp">Sign Up</button>
                <button>Log In</button> 
             
                <button menuClose={viewMenu} onClick={toggleMenu}>{viewMenu ? `Close` : `Enter`}</button>
              </div>

            </div>
          </div> 
        </Route> */}
      </Switch>

      <Sidebar view={viewMenu} toggleMenu={toggleMenu}/>
    </div>
  );
}

