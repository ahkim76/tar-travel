import '../index.css'
function OpeningMenu({ closeMenu }) {
    return (
        <div className="opening-menu">
            <h1 className="opening-header">Welcome to Tar Travel!</h1>
            <p className="opening-paragraph">Use our interactive map to plan your study abroad travels</p>
            <a href="#" onClick={closeMenu} className="opening-button" data-text="Hover over me!">Hover over me!</a>
        </div>  
    )
}

export default OpeningMenu