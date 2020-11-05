import './App.css';
import Sidebar from './Sidebar';
import Background from './assets/Feb26_BloomGeneration-2322.jpg';
import ToggleDisplay from "react-toggle-display";


function App() {
  handleSidebar = () => {
    // this.setState({
    //   show: !this.state.show,
    // });
  };

  return (
    <div className="App">

      <div className="homePage" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>
        <div className="content">
          <h1>le grimoire</h1>
          <button>Enter</button>
        </div>
      </div>
    <Toggle>
      {/* <Sidebar /> */}

    </Toggle>
    </div>
  );
}

export default App;
