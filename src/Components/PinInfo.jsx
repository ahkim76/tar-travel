import '../index.css'
function PinInfo({ universityName, overview, studentExperience, image }) {
    return (
        
        <div className="all-text">
            <h2 className="p-header">
                {universityName}
            </h2>
            <p className="p-description">
                {overview}
            </p>
            <p className="p-details">
                {studentExperience}
            </p>
            <img src={image} alt={`Image of ${universityName}`}/>
        </div>
        
    );
}

export default PinInfo
