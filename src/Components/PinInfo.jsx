import '../index.css'
function PinInfo({ universityName, overview, studentExperience, image }) {
    console.log("test");
    return (
        
        <div className="all-text">
            <h2 className="p-header">
                {universityName}
            </h2>
            <div className="image-container">
                <img className="university-image" src={image}/>
            </div>
            
            <p className="p-description">
                {overview}
            </p>
            
            <p className="p-details">
                {studentExperience}
            </p>
            
        </div>
        
    );
}

export default PinInfo
