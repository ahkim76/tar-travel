import '../index.css'
import PinInfo from "./PinInfo"
function UserInterface({ universityName, description, details }) {
    return (
        <>
        <h1 className='header'>
            UNC-Chapel Hill<br></br>Study Abroad Opportunities
        </h1>
        <PinInfo universityName={universityName} 
                description={description} 
                details={details} />
        </>
    )
}

export default UserInterface
