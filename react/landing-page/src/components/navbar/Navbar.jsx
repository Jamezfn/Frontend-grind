import "./navbar.css";
import logo from  "../../assets/images/logo.png"
import search from  "../../assets/images/search.png"

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={ logo } alt="logo" />
            </div>

            <div className="nav-items">
                <h3>Medical Care</h3>
                <h3>Medical Health</h3>
                <h3>Medical Test</h3>
                <h3>Medical Labs</h3>
                <h3>Medical Contact</h3>
            </div>

            <div className="side-nav-items">
                <h3>Login</h3><img src={ search } alt="search" />
            </div>
        </div>
    );
}

export default Navbar;