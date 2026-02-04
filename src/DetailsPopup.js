function DetailsPopup ({onClose}) {
    
    
    return(
        <>
        <div className="popup-overlay" onClick={onClose}></div>
        <div className="details-popup">
            <h2 className="title">This is name of the book.</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="closing-button" onClick={onClose}>X</button>
        </div>
        </>
    );
}

export default DetailsPopup