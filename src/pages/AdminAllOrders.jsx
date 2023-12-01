import OrderService from "../services/OrderService";
import React, {useState, useEffect} from "react";
import { format } from "date-fns"; 
import '../styles/AdminAllOrders.css';

function AdminAllOrders () 
{
    const [orders, setOrders] = useState(null);

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
  
      if (accessToken) {
            OrderService.getOrdersForAllUsers()
            .then(data => {

            //     if (data) {
            //         const updatedOrders = data.orders.map(order => {
            //           order.date = format(new Date(order.date), 'yyyy-MM-dd HH:mm:ss');
            //           return order;
            //         });
            //         setOrders(updatedOrders);
            // }})

                if (data) {
                    setOrders(data);
            }})

            .catch(error => {
                console.error("Error fetching user or order data:", error);
            });
        }
        }, []);
  


    return (
        <>
            <div className='background-color-adminAllOrders'>
                
                <div className="content">
                
                <div className='adminAllOrders-heading'>
                    {orders ? (
                        <h1 className='remove-margin'>ALL ORDERS</h1>
                    ) : (
                        <h1 className='remove-margin'>LOADING CONTENT...</h1>
                    )}
                    </div>

                    <div className='allOrders-container-info'>
                        <div className="allOrders-details">
                            <h1 className='remove-margin'>ID</h1>
                            <h1 className='remove-margin'>NAME </h1>
                            <h1 className='remove-margin'>SURNAME</h1>
                            <h1 className='remove-margin'>PAYMENT METHOD</h1>
                            <h1 className='remove-margin'>DATE ACQUIRED</h1>
                        </div>
                    </div>

                    {orders && orders.map(order => (                  
                                    
                        <div className='allOrders-container' key={order.id}>
                            <div className="allOrders-details">
                                <h1 className='remove-margin'>{order.id}</h1>
                                <h1 className='remove-margin'>{order.name} </h1>
                                <h1 className='remove-margin'>{order.surname}</h1>
                                <h1 className='remove-margin'>{order.paymentMethod}</h1>
                                <h1 className='remove-margin'>{order.date}</h1>
                            </div>
                        </div>
                     
                     ))}

                </div>
            
            </div>
        </>
    )

}


export default AdminAllOrders;