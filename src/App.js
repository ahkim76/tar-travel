import logo from './logo.svg';
import './App.css';
import MainMap from './Components/MainMap.jsx'
import UserInterface from './Components/UserInterface.jsx';
import PinInfo from './Components/PinInfo.jsx';
function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="ui-container">
          <UserInterface />
        </div>
        <div className="map-container">
          <MainMap />
        </div>
        <div className="info-container">
          <PinInfo />
        </div>
      </div>
      </div>
  );
}

export default App;
