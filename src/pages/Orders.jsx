import '../styles/Orders.css';
import React, {useState, useEffect} from "react";
import UserService from '../services/UserService';

function Orders() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (userData) {
        UserService.getUser(userData.id)
            .then(data => setUser(data))
            .catch(error => {
            console.error("Error fetching user data:", error);
            });
        }
    }, []);

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

                        <div className='order-container'>
                            <h1>MADISON BEER</h1>

                        </div>

                        <div className='order-container'>
                            <h1>MADISON BEER</h1>

                        </div>

                    </div>
                
                </div>
            
            </div>
        </>
    )
}

export default Orders;