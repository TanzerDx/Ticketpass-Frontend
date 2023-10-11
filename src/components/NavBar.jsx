import "../styles/styles.components/Navbar.css"
import logo from "../assets/Project Icon.png"
import notifications from "../assets/3239958.png"
import {NavLink} from "react-router-dom"
import SearchBar from "./SearchBar";

function NavBar() {


  return (
    <>
        <div className="navbar-container">
          
          <img src={logo} alt="Logo" className="navbar-logo" />

          <div className="navbar-item">
            <NavLink to="/" id="homepage-link" className="navbar-item-text">
              HOMEPAGE
            </NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/concerts" id="concerts-link" className="navbar-item-text">
            CONCERTS
            </NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/statistics" id="statistics-link" className="navbar-item-text">
            STATISTICS
            </NavLink>
          </div>
          
          <SearchBar/>

          <img src={notifications} alt="Notifications" className="navbar-notifications" />

          <div className="navbar-item">
            <NavLink to="/signin" id="signin-link" className="navbar-item-text">
            SIGN IN
            </NavLink>
          </div>
        </div>
    </>
  )
}

export default NavBar;