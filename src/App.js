import logo from './logo.svg';
import './App.css';
import MainMap from './Components/MainMap.jsx'
import UserInterface from './Components/UserInterface.jsx';
import { useState } from 'react';
import UniversityData from "./exchangejson.json";


function App() {
  const [currentUniversity, setCurrentUniversity] = useState(null);

  const handleCurrentUniversity = (universityKey) => {
    const selectedUniversity = UniversityData.universities.find(uni => uni.name === universityKey);
    setCurrentUniversity(selectedUniversity);
    console.log(`Selected university: ${currentUniversity}`)
  }

  return (
    <div className="wrapper">
      <div className="main">
        <div className="ui-container">
         <UserInterface
              universityName={currentUniversity ? currentUniversity.name : "Select a University!"}
              city={currentUniversity ? currentUniversity.location.city : ""}
              country={currentUniversity ? currentUniversity.location.country : ""}
              overview={currentUniversity ? currentUniversity.overview : ""}
              image = {currentUniversity ? currentUniversity.image : ""}
              studentExperience={currentUniversity ? currentUniversity.student_experience : ""}
            /> 
        </div>
        <div className="map-container">
           <MainMap 
              universities={UniversityData.universities}
              onSelectUniversity={handleCurrentUniversity}
          /> 
        </div>
      </div>
      </div>
  );
}

export default App;
