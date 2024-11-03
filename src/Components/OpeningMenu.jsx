import '../index.css'
import { BsArrowRight } from "react-icons/bs";
function OpeningMenu({ closeMenu }) {
    return (
        <>
            <div className="opening-menu">
                <h1 className="opening-header">Welcome to Tar Travel!</h1>
                <p className="opening-paragraph">Use our interactive map to plan your study abroad travels</p>
                <div className="button-container">
                    <BsArrowRight className="arrow-icon"/>
                    <a href="#" onClick={closeMenu} className="opening-button" data-text="Click on me to Enter!">Click on me to Enter!</a>
                </div>
                
            </div>  
            
        </>
        
    )
}

export default OpeningMenu
