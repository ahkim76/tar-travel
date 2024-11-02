import logo from './logo.svg';
import './App.css';
import MainMap from './Components/MainMap.jsx'
import UserInterface from './Components/UserInterface.jsx';


function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="ui-container">
          <UserInterface 
              universityName={"Brenton University"}
              description={"P Diddy went here"}
              details={"On foenem grave"}
          />
        </div>
        <div className="map-container">
          <MainMap 
              universityName={"Brenton University"}
              lat={37.5664}
              long={126.9387}
          />
        </div>
      </div>
      </div>
  );
}

export default App;
