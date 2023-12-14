import React, {useState, useEffect} from "react";
import '../styles/styles.components/Navbar.css';
import logo from '../assets/Project Icon.png';
import notifications from '../assets/3239958.png';
import { NavLink } from 'react-router-dom';
import UserService from "../services/UserService";
import OrderService from "../services/OrderService";
import { Client } from '@stomp/stompjs';
import SearchBar from './SearchBar';

function NavBar() {

  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href="/"
  }

  const [user, setUser] = useState(null);
  const [topics, setTopics] = useState(null);
  const [stompClient, setStompClient] = useState();
  const [messagesReceived, setMessagesReceived] = useState([]);

  const setupStompClient = () => {
    const stompClient = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    stompClient.onConnect = () => {
          // topics.forEach((topic) => {
          console.log("test");    
          stompClient.subscribe(`/user/4/queue/inboxmessages`, (data) => {
                  onMessageReceived(data);
              });
          // });
      };
    

    stompClient.activate();
    setStompClient(stompClient);
  };
          
  const onMessageReceived = (data) => {
    const message = JSON.parse(data.body);
    setMessagesReceived(messagesReceived => [...messagesReceived, message]);
  };

      useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
      
        if (accessToken) {
          UserService.getUserByAccessToken(accessToken)
            .then(user => {
              setUser(user);
      
              if (user) {
                OrderService.getAllOrders(user.id)
            .then(orders => {
                  if (Array.isArray(orders.orders)) { 
                    const retrievedOrders = orders.orders;
                    const concertIds = retrievedOrders.map(order => order.concert.id);
                    setTopics(concertIds);

                    setupStompClient();

                  }})
                  .catch(error => {
                    console.error("Error fetching orders:", error);
                  });
              }
            })
            .catch(error => {
              console.error("Error fetching user:", error);
            });
        }
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

          {user && user.role === "user" && (
              <>
                <div className="navbar-notifications-container">
                  
                  <img src={notifications} alt="Notifications" className="navbar-notifications-icon" />
                  
                  <div className="dropdown-content">
                  {messagesReceived ? (
                      <div className="navbar-notifications-text">
                        <h1>NO NOTIFICATIONS!</h1>
                      </div>
                    )
                    :
                    (
                      messagesReceived
                      .filter(message => message.from !== props.username)
                      .map(message => (
                          <div className="message-design">
                            <div key={message.id}>
                                <p>Text: {message.text}</p>
                            </div>
                          </div>
                      ))
                  )}
                  </div>

                </div>
                
                <div className="navbar-item">
                  <NavLink to="/orders" id="orders-link" className="navbar-item-text">
                    MY TICKETS
                  </NavLink>
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

                    </div>
                </div>

              <button onClick={logout} id='navbar-item-text' className='navbar-logout'>LOGOUT</button>
            </>
            )}

            {user && user.role === "manager" && (
              <>
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