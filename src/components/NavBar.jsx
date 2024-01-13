import React, {useState, useEffect} from "react";
import '../styles/styles.components/Navbar.css';
import logo from '../assets/Project Icon.png';
import notificationsIcon from '../assets/3239958.png';
import { NavLink } from 'react-router-dom';
import UserService from "../services/UserService";
import WebSocketsConfig from '../services/WebSocketsConfig';
import OrderService from "../services/OrderService";
import SearchBar from './SearchBar';

function NavBar() {

  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href="/"
  }

  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
  
    const fetchData = async () => {
      try {
        if (accessToken) {
          const user = await UserService.getUserByAccessToken(accessToken);
  
          if (user) {
            setUser(user);
  
            const orders = await OrderService.getAllOrders(user.id);
  
            if (Array.isArray(orders.orders)) {
              const retrievedOrders = orders.orders;
              const concertIdsSet = new Set(retrievedOrders.map((order) => order.concert.id));
              WebSocketsConfig.setupStompClient([...concertIdsSet]);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); 

  
  useEffect(() => {
    setNotifications(WebSocketsConfig.getNotifications());
    console.log("effect ran!", notifications);
  }, []);


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
            <NavLink data-testid="cypress-goToConcerts-button" to="/concerts" id="concerts-link" className="navbar-item-text">
            CONCERTS
            </NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/aboutUs" id="aboutUs-link" className="navbar-item-text">
            ABOUT US
            </NavLink>
          </div>
          
          <SearchBar/>

          {user && user.role === "user" && (
              <>
                <div className="navbar-notifications-container">
                  
                  <img src={notificationsIcon} alt="Notifications" className="navbar-notifications-icon" />
                  
                  <div className="dropdown-content">
                  {notifications && notifications.length === 0 || notifications == null ? (
                      <div className="navbar-notifications-text">
                        <h1>NO NEW NOTIFICATIONS!</h1>
                      </div>
                    )
                    :
                    (
                      notifications && notifications.map((msg, index) => (
                        <div className="message-design" key={index}>
                          <h1>{msg.message}</h1>
                        </div>
                      ))
                    )}
                  </div>

                </div>
                
                <div className="navbar-item-user">
                      <h1 className="dropdown-menu-size">MY ORDERS</h1>
                    <div className="dropdown-content">
                          
                      <div className="navbar-item">
                        <NavLink to="/orders" id="allOrders-link" className="navbar-item-text">
                          UPCOMING CONCERTS
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/previousConcerts" id="previousOrders-link" className="navbar-item-text">
                          PREVIOUS CONCERTS
                        </NavLink>
                      </div>


                    </div>
                </div>

                <button onClick={logout} id='navbar-item-text' className='navbar-logout'>LOGOUT</button>
              </>
            )}

          {user && user.role === "admin" && (
            <>
                <div className="navbar-item-manager">
                      <h1 className="dropdown-menu-size">ADMIN FUNCTIONS</h1>
                    <div className="dropdown-content">
                          
                      <div className="navbar-item">
                        <NavLink to="/allOrders" id="orders-link" className="navbar-item-text">
                          ALL ORDERS
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/addConcert" id="orders-link" className="navbar-item-text">
                          ADD CONCERT
                        </NavLink>
                      </div>

                      
                      <div className="navbar-item">
                        <NavLink to="/updateConcert" id="orders-link" className="navbar-item-text">
                          UPDATE CONCERT
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/banUser" id="orders-link" className="navbar-item-text">
                          BAN USER
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/unbanUser" id="orders-link" className="navbar-item-text">
                          UNBAN USER
                        </NavLink>
                      </div>

                    </div>
                </div>

              <button onClick={logout} id='navbar-item-text' className='navbar-logout'>LOGOUT</button>
            </>
            )}

            {user && user.role === "manager" && (
              <>
                <div className="navbar-notifications-container">
                  
                  <img src={notificationsIcon} alt="Notifications" className="navbar-notifications-icon" />
                  
                  <div className="dropdown-content">
                  {notifications && notifications.length === 0 || notifications == null ? (
                      <div className="navbar-notifications-text">
                        <h1>NO NEW NOTIFICATIONS!</h1>
                      </div>
                    )
                    :
                    (
                      notifications && notifications.map((msg, index) => (
                        <div className="message-design" key={index}>
                          <h1>{msg.message}</h1>
                        </div>
                      ))
                    )}
                  </div>

                </div>


                <div className="navbar-item-manager">
                      <h1 className="dropdown-menu-size">MANAGER FUNCTIONS</h1>
                    <div className="dropdown-content">
                          
                      <div className="navbar-item">
                        <NavLink to="/allOrders" id="orders-link" className="navbar-item-text">
                          ALL ORDERS
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/addConcert" id="orders-link" className="navbar-item-text">
                          ADD CONCERT
                        </NavLink>
                      </div>

                      
                      <div className="navbar-item">
                        <NavLink to="/updateConcert" id="orders-link" className="navbar-item-text">
                          UPDATE CONCERT
                        </NavLink>
                      </div>

                      
                      <div className="navbar-item">
                        <NavLink to="/addAdmin" id="orders-link" className="navbar-item-text">
                          ADD ADMIN
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/deleteAdmin" id="orders-link" className="navbar-item-text">
                          DELETE ADMIN
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/banUser" id="orders-link" className="navbar-item-text">
                          BAN USER
                        </NavLink>
                      </div>

                      <div className="navbar-item">
                        <NavLink to="/unbanUser" id="orders-link" className="navbar-item-text">
                          UNBAN USER
                        </NavLink>
                      </div>

                    </div>
                </div>

                <button onClick={logout} id='navbar-item-text' className='navbar-logout'>LOGOUT</button>
              </>
            )}

            {user && user.role === "banned" && (
              <>
                <button onClick={logout} id='navbar-item-text' className='navbar-logout-banned'>LOGOUT</button>
              </>
            )}

            {user === null && (
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