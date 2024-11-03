import logo from './logo.svg';
import './App.css';
import MainMap from './Components/MainMap.jsx'
import UserInterface from './Components/UserInterface.jsx';
import { useState } from 'react';
import ExchangeData from "./exchangejson.json";
import CheapData from "./cheapjson.json";
import SummerData from "./summerjson.json";
import Dropdown from './Components/Dropdown.jsx';

import OpeningMenu from './Components/OpeningMenu.jsx';


function App() {
  const [dataset, setDataset] = useState(ExchangeData)
  const [currentUniversity, setCurrentUniversity] = useState(null);
  const [onOpening, setOnOpening] = useState(true);
  const [header, setHeader] = useState("Exchange");

  const handleCurrentUniversity = (universityKey) => {
    const selectedUniversity = dataset.universities.find(uni => uni.name === universityKey);
    setCurrentUniversity(selectedUniversity);
    console.log(`Selected university: ${currentUniversity}`)
    console.log(header)
  }
/*
Categories
Exchange, Less than $15k, Summer, Direct Enroll, Internships
 */

  return (
    
    <div className="wrapper">
      {onOpening ? (
        <OpeningMenu closeMenu={() => setOnOpening(false)} />
      ) : (
        <div className="main">
          <div className="ui-container">
            <UserInterface
              universityName={currentUniversity ? currentUniversity.name : "Select a University!"}
              city={currentUniversity ? currentUniversity.location.city : ""}
              country={currentUniversity ? currentUniversity.location.country : ""}
              overview={currentUniversity ? currentUniversity.overview : ""}
              image={currentUniversity ? currentUniversity.image : ""}
              studentExperience={currentUniversity ? currentUniversity.student_experience : ""}
              header = {header}
              id={currentUniversity ? currentUniversity.id : ""}
            />
          </div>
          <div className="map-container">
            <MainMap
              universities={dataset.universities}
              onSelectUniversity={handleCurrentUniversity}
            />
            <Dropdown setDataset={setDataset} setHeader={setHeader}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
