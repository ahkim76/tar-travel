import '../index.css'
function PinInfo({ universityName, overview, studentExperience }) {
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
        </div>
        
    );
}

export default PinInfo
