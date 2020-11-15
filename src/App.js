import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './css/styles.css';
import Sidebar from './components/Sidebar';
import Background from './assets/Feb26_BloomGeneration-2322.jpg';
// TODO destructure?!
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
  const [userId, setUserId] = useState(null);
  const [viewMenu, setViewMenu] = useState(false); 
  // viewMenu fn toggles boolean

  const toggleMenu = () => setViewMenu(!viewMenu);

  // useEffect(() => {
  //   const fetchEntries = async () => {
  //     // GET products
  //     const response = await fetch('http://localhost:3000/entries', {
  //       method: 'GET',
  //     });
  //     const data = await response.json();
  //     setEntries(data);
  //   }
  //   fetchEntries();
  // }, [])

  const addEntry = async (newEntryId) => {
    const body = {
      entryId: newEntryId,
    }
    if (!userId) {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(body),
      })
      const data = await response.json();
      setUserId(data.id);
      setUserEntries(data.entries);
    } else {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      })
      const data = await response.json();
      setUserEntries(data.entries);
    }
  }

  return (
    <div className="App">

      <Switch>
        <Route path="/astro" 
                component={Astro} 
                addEntry={addEntry}/>
        <Route path="/symbols" 
                component={Symbols} 
                addEntry={addEntry}/>
        <Route path="/tarot" 
                component={Tarot} 
                addEntry={addEntry}/>
        <Route path="/crystals" 
                component={Crystals} 
                addEntry={addEntry}/>
        <Route path="/rituals" 
                component={Rituals} 
                addEntry={addEntry}/>
        <Route path="/spells" 
                component={Spells} 
                addEntry={addEntry}/>
        <Route path="/herbs" 
                component={Herbs}
                addEntry={addEntry} />
        <Route path="/entries" 
                component={Entries}
                entries={entries} />
        {/* HOMEPAGE */}
        <Route path="/">
          <div className="homePage" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>
            <div className="content">

              <h1>le grimoire</h1>

              <div className="actions">
                {/* <Route path="/signUp" component={SignUp} />
                <Route path="/logIm" component={LogIn} /> */}

                <button className="signUp">Sign Up</button>
                <button>Log In</button> 
                {/* <Link to='/signUp'>Sign Up</Link>
                <Link to='/logIn'>Log In</Link> */}
                <button menuClose={viewMenu} onClick={toggleMenu}>{viewMenu ? `Close` : `Enter`}</button>
              </div>

            </div>
          </div>
        </Route>

      </Switch>

      <Sidebar view={viewMenu} toggleMenu={toggleMenu}/>
    </div>
  );
}

