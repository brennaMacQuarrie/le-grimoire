import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/styles.css';
import Sidebar from './Sidebar';
import Background from './assets/Feb26_BloomGeneration-2322.jpg';
// TODO destructure?!
import Astro from './pages/astro';
import Symbols from './pages/symbols';
import Tarot from './pages/tarot';
import Crystals from './pages/crystals';
import Rituals from './pages/rituals';
import Spells from './pages/spells';
import Herbs from './pages/herbs';



export default function App() {

  // const sideviewRef = useRef(null);
  const [viewMenu, setViewMenu] = useState(false); // viewMenu fn toggles boolean


  const toggleMenu = () => setViewMenu(!viewMenu);

  return (
    <div className="App">

      <Switch>
        <Route path="/astro" component={Astro} />
        <Route path="/symbols" component={Symbols} />
        <Route path="/tarot" component={Tarot} />
        <Route path="/crystals" component={Crystals} />
        <Route path="/rituals" component={Rituals} />
        <Route path="/spells" component={Spells} />
        <Route path="/herbs" component={Herbs} />

        <Route path="/">
          <div className="homePage" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>
            <div className="content">
              <h1>le grimoire</h1>
              <button onClick={toggleMenu}>{viewMenu ? `Close` : `Enter`}</button>
            </div>
          </div>
        </Route>
      </Switch>

      <Sidebar view={viewMenu}/>
    </div>
  );
}

