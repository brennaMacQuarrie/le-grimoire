import './App.css';
import Sidebar from './Sidebar';
import Background from './assets/Feb26_BloomGeneration-2322.jpg';


function App() {

  // const [menu, setMenu] = viewMenu();



  return (
    <div className="App">

      <div className="homePage" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>
        <div className="content">
          <h1>le grimoire</h1>
          <button>Enter</button>
        </div>
      </div>

      <div className="menu">
        <h2>Make an Entry</h2>
        <a href="">Astro Observations</a>
        <a href="">Ledger of Symbols</a>
        <a href="">Tarot Spreads</a>
        <a href="">Crystals</a>
        <a href="">Rituals</a>
        <a href="">Spells</a>
        <a href="">Herbs</a>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
