import '../index.css'
import PinInfo from "./PinInfo"
function UserInterface({ universityName, city, country, overview, studentExperience, image }) {
    console.log(image)
    return (
        <>
        <h1 className='header'>
            UNC-Chapel Hill<br></br>Study Abroad Opportunities
        </h1>
        <PinInfo universityName={universityName} 
                overview={overview} 
                studentExperience={studentExperience}
                image={image}
                />
        </>
    )
}

export default UserInterface
