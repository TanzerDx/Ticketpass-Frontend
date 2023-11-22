import '../styles/Checkout.css';
import React, {useState, useEffect} from "react";
import {format} from "date-fns";
import paypalLogo from '../assets/paypal-logo-C83095A82C-seeklogo.com.png';
import cardLogo from '../assets/credit-card-black-png-0.png';
import idealLogo from '../assets/ideal-logo-1024.png';
import OrderService from '../services/OrderService.jsx';
import TicketService from '../services/TicketService.jsx';

function Checkout() {

    const concertData = JSON.parse(sessionStorage.getItem("concertItem"));

    const [numberOfTickets, setNumberOfTickets] = useState(1);

    const price = numberOfTickets * concertData.price;

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    
    const handlePlusClick = () => {
        setNumberOfTickets(numberOfTickets + 1);

        if (numberOfTickets == 4)
        {
            setNumberOfTickets(4);
            alert("You cannot buy more than 4 tickets!");
        }
    };
    
    const handleMinusClick = () => {
        if (numberOfTickets > 1) {
        setNumberOfTickets(numberOfTickets - 1);
        }
    };

    const handlePaymentMethodClick = (name) => {
      setSelectedPaymentMethod(name);
    };

    let formattedDate = "";

    if (concertData!= null) {
        
        const concertDate = new Date(concertData.date);
        formattedDate = format(concertDate, 'yyyy-MM-dd HH:mm:ss');
      }

    const [formData, setFormData] = useState({
        concert: concertData,
        user: JSON.parse(sessionStorage.getItem("user")),
        date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSX"),
        name: "",
        surname: "",
        address: "",
        phone: "",
        ticketNumber: numberOfTickets,
        orderPrice: price,
        paymentMethod: selectedPaymentMethod
     })

     useEffect(() => {
        setFormData((formData) => ({
            ...formData,
            ticketNumber: numberOfTickets,
            orderPrice: numberOfTickets * concertData.price,
          paymentMethod: selectedPaymentMethod
        }));
      }, [selectedPaymentMethod]);

     const updateFormData = event => {
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
            ticketNumber: numberOfTickets,
            orderPrice: numberOfTickets * concertData.price,
            paymentMethod: selectedPaymentMethod
        }));
    };


    const [orderTickets, setOrderTickets] = useState({
        order: null,
      });
      
      const updateOrderTickets = (orderToPass) => {
        setOrderTickets(() => ({
          order: orderToPass
        }));
      };
      
      const handleCheckout = async (event) => {
        event.preventDefault();
      
        const orderResponse = await OrderService.addOrder(formData);
        const orderToPass = await OrderService.getOrder(orderResponse.id);
      
        updateOrderTickets(orderToPass);
    }
    
    useEffect(() => {
      
        if (orderTickets.order != null)
        {
            console.log(orderTickets);
        
            TicketService.addTickets(orderTickets);
        }
      }, [orderTickets]);

    return (
        <>
            <div className='background-color-checkout'>
                
                <div className="content">
                
                    <div className='checkout-heading'>
                        <h1 className='remove-margin'>Checkout</h1>
                    </div>

                    <div className='checkout-grid'>

                    <form onSubmit={handleCheckout}>
                        <div className='checkout-grid-left'>
                        <div className='checkout-validation-text'>
                                    <h1 className='remove-margin'>Number of tickets: </h1>
                                </div>
 
                                <button type="button" name="buttonPlus" className='button-ticket-management' onClick={handlePlusClick}>+</button>
                                <div className='checkout-validation-text-ticketNumber'>
                                    <h1 className='remove-margin'>{numberOfTickets}</h1>
                                </div>
                                <button type="button" name="buttonMinus" className='button-ticket-management' onClick={handleMinusClick}>-</button>


                                <div className='checkout-validation-text'>
                                    <h1 className='remove-margin'>Name: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        type="text"
                                        name="name"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>
                                
                                <div className='checkout-validation-text'>
                                    <h1 className='remove-margin'>Surname: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>

                                <div className='checkout-validation-text'>
                                    <h1 className='remove-margin'>Address: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        type="text"
                                        name="address"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>

                                <div className='checkout-validation-text'>
                                    <h1 className='remove-margin'>Phone Number: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>
                                <div className='checkout-validation-text-paymentMethod'>
                                    <h1 className='remove-margin'>Payment Method: </h1>
                                </div>
                        
                                <div className='payment-method-grid'>
                                        <div className='payment-method' onClick={() => handlePaymentMethodClick("Card")}>
                                            <img src={cardLogo} alt="Card" className="payment-method-image" />
                                        </div>

                                        <div className='payment-method' onClick={() => handlePaymentMethodClick("iDeal")}>
                                            <img src={idealLogo} alt="iDeal" className="payment-method-image" />
                                        </div>

                                        <div className='payment-method' onClick={() => handlePaymentMethodClick("PayPal")}>
                                            <img src={paypalLogo} alt="PayPal" className="payment-method-image" />
                                        </div>
                                </div>

                                <div className="checkbox-container-flex">
                                    <input type="checkbox" id="agreeCheckbox"/>
                                    <label htmlFor="agreeCheckbox" className="checkout-agreeCheckbox">I have read and agree to the general terms of Ticketpass</label>
                                </div>
                        
                            <input type="submit" className="button-makeOrder" value="PROCEED"/>
                        
                        </div>
                        </form>

                        <div className='checkout-grid-right'>

                            <div className='checkout-concert-info-box'>
                                
                                <div className='checkout-concert-info-heading'>
                                    <h1 className='remove-margin'>{concertData.artist}</h1>
                                </div>
                                
                                <div className='checkout-concert-info-description'>
                                    
                                    <h1 className='remove-margin'>Venue: {concertData.venue}</h1>
                                    <h1 className='remove-margin'>Date: {formattedDate}</h1>
                                    <h1 className='remove-margin'>Location: {concertData.city}</h1>
                                        
                                        <div className='checkout-concert-info-description-price'>
                                            <h1 className='remove-margin'>TOTAL PRICE: {price.toFixed(2)}€</h1>
                                        </div>
                                
                                </div>
                            
                            </div>

                        </div>

                    </div>
            
                </div>
            </div>
        </>
    )
}

export default Checkout;