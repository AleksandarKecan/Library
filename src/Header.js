import { Link } from "react-router-dom";

function Header () {

    return (
        <header className="header">
            <Link to="/">
            <h1>Wellcome to story rent!</h1>
            </Link>
            <div className="header-buttons">
                <Link to="/rented" className="header-button">Rented</Link>
                <Link to="/contactUs" className="header-button">Contact us</Link>
            </div>
        </header>
    );
}

export default Header;