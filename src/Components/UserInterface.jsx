import '../index.css'
import PinInfo from "./PinInfo"
function UserInterface({ universityName, city, country, overview, studentExperience }) {
    return (
        <>
        <h1 className='header'>
            UNC-Chapel Hill<br></br>Study Abroad Opportunities
        </h1>
        <PinInfo universityName={universityName} 
                overview={overview} 
                studentExperience={studentExperience}
                />
        </>
    )
}

export default UserInterface
