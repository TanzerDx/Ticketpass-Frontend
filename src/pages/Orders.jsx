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
                        <h1 className='orders-heading-margin'>Hello, ID {user.id}</h1>
                    ) : (
                        <h1 className='orders-heading-margin'>ERROR!</h1>
                    )}
                    </div>
                    
                
                </div>
            
            </div>
        </>
    )
}

export default Orders;