import '../index.css'
import PinInfo from "./PinInfo"
function UserInterface() {
    return (
        <>
        <h1 className='header'>
            UNC-Chapel Hill<br></br>Study Abroad Opportunities
        </h1>
        <PinInfo universityName={"Brenton Universty"} 
        description={"P Diddy Land"} 
        details={"HELLO!! tstststs"} />
        </>
    )
}

export default UserInterface
