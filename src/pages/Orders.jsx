import '../styles/Orders.css';
import React, {useState, useEffect} from "react";
import { format } from "date-fns"
import UserService from '../services/UserService';
import OrderService from '../services/OrderService';
import TicketService from '../services/TicketService';

function Orders() {

    const [user, setUser] = useState(null);

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
    
        if (accessToken) {
            UserService.getUserByAccessToken(accessToken)
                .then(data => {
                    setUser(data);

                    return OrderService.getAllOrders(data.id);

                })
                .then(data => {
                    const orders = data.orders.map(order => {
                        order.concert.date = format(new Date(order.concert.date), 'yyyy-MM-dd HH:mm:ss');
                        return order;
                    });
                    setOrders(orders);
                })
                .catch(error => {
                    console.error("Error fetching user or order data:", error);
                });
        }
    }, []);

    const handleGetTickets = (orderId) => {
        
        localStorage.setItem("orderId", orderId);
        window.location.href = '/tickets';
        
    };
    

    return (
        <>
            <div className='background-color-orders'>
                
                <div className="content">
                
                    <div className='orders-heading'>
                    {user ? (
                        <h1 className='orders-heading-margin'>UPCOMING CONCERTS</h1>
                    ) : (
                        <h1 className='orders-heading-margin'>LOADING CONTENT...</h1>
                    )}
                    </div>
                    
                    <div className='orders-flex'>

                        {orders && orders.map(order => (                  
                                    <div className='order-container' key={order.id}>

                                        <div className='order-artist-name'>
                                            <h1 className='orders-heading-margin'>{order.concert.artist}</h1>
                                        </div>
                                        
                                        <div className='order-concert-details'>
                                            <h1 className='orders-heading-margin'>{order.concert.venue}</h1>
                                            <h1 className='orders-heading-margin'>{order.concert.city}</h1>
                                        </div>

                                        <div className='order-concert-details'>
                                            <h1 className='orders-heading-margin'>{order.concert.date}</h1>
                                        </div>

                                        <button type="button" className="button-showTickets" name="showTickets" onClick={() => handleGetTickets(order.id)}>SHOW TICKETS</button>
                                    
                                    </div>
                            ))}
                        
                    </div>
                
                </div>
            
            </div>
        </>
    )
}

export default Orders;