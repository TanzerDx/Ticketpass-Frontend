import React, {useState, useEffect} from "react";
import '../styles/styles.components/Navbar.css';
import logo from '../assets/Project Icon.png';
import notifications from '../assets/3239958.png';
import { NavLink } from 'react-router-dom';
import UserService from "../services/UserService";
import SearchBar from './SearchBar';

function NavBar() {

  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href="/"
  }

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");

  //   if (accessToken) {
  //       UserService.getUserByAccessToken(accessToken)
  //           .then(data => {
  //               setUser(data);
  //           })}})


  const userSessionExists = !!localStorage.getItem("accessToken");

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

          {user ? (
          <>
            <img src={notifications} alt="Notifications" className="navbar-notifications" />
            
            <div className="navbar-item">
            <NavLink to="/orders" id="orders-link" className="navbar-item-text">
            MY TICKETS
            </NavLink>
            </div>

            <button onClick={logout} id='navbar-item-text' className='navbar-logout'>LOGOUT</button>
          </>
          ):(

            <div className="navbar-signin">
              <NavLink to="/signin" id="signin-link" className="navbar-item-text">
              SIGN IN
              </NavLink>
            </div>
          )}
        </div>
    </>
  )
}

export default NavBar;