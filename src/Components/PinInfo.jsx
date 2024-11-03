import '../index.css'
function PinInfo({ universityName, description, details, city, country, website }) {
    console.log(city)
    return (
        
        <div className="all-text">
            <h2 className="p-header">
                {universityName}
            </h2>
            <p className="p-description">
                {description}
            </p>
            <p className="p-details">
                {details}
                
            </p>
            <p>{city}</p>
        </div>
        
    );
}

export default PinInfo
