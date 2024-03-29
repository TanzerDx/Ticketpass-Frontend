import OrderService from "../services/OrderService";
import React, {useState, useEffect} from "react";
import { format } from "date-fns"; 
import {toast} from "react-toastify";
import '../styles/AdminAllOrders.css';

function AdminAllOrders () 
{
    const [orders, setOrders] = useState(null);
    const [keyword, setKeyword] = useState("");

    const handleFilter = (e) => {
      e.preventDefault();
  
      if(keyword != ""){
        OrderService.getOrder(keyword)
        .then(data => {
          setOrders([data]);
        })
        .catch(()=> {
          toast.error('ID is not valid!', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        });
      }
    };

    useEffect(() => {
      OrderService.getOrdersForAllUsers()
        .then(data => {
          setOrders(data);
        })
        .catch(error => {
          console.error("Error fetching user or order data:", error);
        });
    }
  , []);


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

                    <div className='allOrdersFilter-container'>
                        
                        <form onSubmit={handleFilter} id="form-size-control-allOrdersFilter">
                            <input
                            type="text"
                            className="allOrdersFilter-input"
                            placeholder="Search by Order ID..."
                            onChange={(e) => setKeyword(e.target.value)}
                            />
                        </form>

                    </div>

                    {orders && orders.map(order => (                  
                                    
                        <div className='allOrders-container' key={order.id}>
                            <div className="allOrders-details">
                                <h1 className='remove-margin'>ID: {order.id}</h1>
                                <h1 className='remove-margin'>NAME: {order.name} </h1>
                                <h1 className='remove-margin'>SURNAME: {order.surname}</h1>
                                <h1 className='remove-margin'>PAYMENT METHOD: {order.paymentMethod}</h1>
                                <h1 className='remove-margin'>DATE ACQUIRED: {format(new Date(order.date), 'dd-MM-yyyy HH:mm:ss')}</h1>
                            </div>
                        </div>
                     
                     ))}

                </div>
            
            </div>
        </>
    )

}


export default AdminAllOrders;