import logo from './logo.svg';
import './App.css';
import MainMap from './Components/MainMap.jsx'
function App() {
  return (
    <div className="main">
      <div className="ui-container">
        <p>User Interface...</p>
      </div>

      <div className="map-container">
        <MainMap />
      </div>
     
    </div>
  );
}

export default App;
