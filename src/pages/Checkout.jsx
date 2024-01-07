import '../styles/Checkout.css';
import React, {useState, useEffect} from "react";
import {format} from "date-fns";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import paypalLogo from '../assets/paypal-logo-C83095A82C-seeklogo.com.png';
import cardLogo from '../assets/credit-card-black-png-0.png';
import idealLogo from '../assets/ideal-logo-1024.png';
import OrderService from '../services/OrderService.jsx';
import TicketService from '../services/TicketService.jsx';
import ConcertService from '../services/ConcertService.jsx';
import UserService from '../services/UserService.jsx';

function Checkout() {

    const concertData = JSON.parse(localStorage.getItem("concertItem"));
    
    const accessToken = localStorage.getItem("accessToken");

    const [user, setUser] = useState(null);

    const [numberOfTickets, setNumberOfTickets] = useState(1);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const price = numberOfTickets * concertData.price;


    const handlePlusClick = () => {
        setNumberOfTickets(numberOfTickets + 1);

        if (numberOfTickets == 4)
        {
            setNumberOfTickets(4);

            toast.error('You cannot buy more than 4 tickets!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            
            setTimeout(() => {
            }, 1000);
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

    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
    };

    const [formData, setFormData] = useState({
        concert: concertData,
        user: "",
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
            user: user,
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

        localStorage.setItem("orderId", JSON.stringify(orderToPass.id));
      };

      
      const handleCheckout = async (event) => {
        event.preventDefault();
    
        try {

            if (!isCheckboxChecked) {
                toast.error('Please agree to the General Terms of Ticketpass before proceeding!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
            }

            if (user.role === "user") {
                const orderResponse = await OrderService.addOrder(formData);
    
                const ticketFormData = {
                    concertId: concertData.id,
                    ticketNumber: numberOfTickets,
                };
    
                await ConcertService.lowerTicketNumber(ticketFormData);
    
                const orderToPass = await OrderService.getOrder(orderResponse.id);
    
                updateOrderTickets(orderToPass);
    
                window.location.href = "/thankyou";
            } else {
                toast.error('Orders can be made only from a user account', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        } 
        
        catch (error) {


            if (error.response.status === 401)
            {
                toast.error('Tickets for the event are lower than the desired amount', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }

        }
    };

    
    useEffect(() => {
      
        if (orderTickets.order != null)
        {
            TicketService.addTickets(orderTickets);
        }
      }, [orderTickets]);

        useEffect(() => {
            UserService.getUserByAccessToken(accessToken)
            .then(data => {
                setUser(data);
        })
        }  , []);

    return (
        <>
            <div className='background-color-checkout'>
                
                <div className="content">
                
                    <div className='checkout-heading'>
                        <h1 className='checkout-remove-margin'>Checkout</h1>
                    </div>

                    <div className='checkout-grid'>

                    <form data-testid="cypress-checkout-form" onSubmit={handleCheckout}>
                        <div className='checkout-grid-left'>
                        <div className='checkout-validation-text'>
                                    <h1 className='checkout-remove-margin'>Number of tickets: </h1>
                                </div>

                                <button type="button" name="buttonMinus" className='button-ticket-management' onClick={handleMinusClick}>-</button>

                                <div className='checkout-validation-text-ticketNumber'>
                                    <h1 className='checkout-remove-margin'>{numberOfTickets}</h1>
                                </div>

                                <button type="button" name="buttonPlus" className='button-ticket-management' onClick={handlePlusClick}>+</button>


                                <div className='checkout-validation-text'>
                                    <h1 className='checkout-remove-margin'>Name: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        data-testid="cypress-checkout-input-name"
                                        type="text"
                                        name="name"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>
                                
                                <div className='checkout-validation-text'>
                                    <h1 className='checkout-remove-margin'>Surname: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        data-testid="cypress-checkout-input-surname"
                                        type="text"
                                        name="surname"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>

                                <div className='checkout-validation-text'>
                                    <h1 className='checkout-remove-margin'>Address: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        data-testid="cypress-checkout-input-address"
                                        type="text"
                                        name="address"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>

                                <div className='checkout-validation-text'>
                                    <h1 className='checkout-remove-margin'>Phone Number: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        data-testid="cypress-checkout-input-phoneNumber"
                                        type="text"
                                        name="phone"
                                        className="checkout-input"
                                        placeholder=""
                                        required
                                        onChange={updateFormData}
                                    />  
                                </div>
                                <div className='checkout-validation-text-paymentMethod'>
                                    <h1 className='checkout-remove-margin'>Payment Method: </h1>
                                </div>
                        
                                <div className='payment-method-grid'>
                                    <div
                                        data-testid="cypress-checkout-input-paymentMethod"
                                        className={`payment-method ${selectedPaymentMethod === "Card" ? "selected" : ""}`}
                                        onClick={() => handlePaymentMethodClick("Card")}
                                    >
                                        <img src={cardLogo} alt="Card" className="payment-method-image" />
                                    </div>

                                    <div
                                        className={`payment-method ${selectedPaymentMethod === "iDeal" ? "selected" : ""}`}
                                        onClick={() => handlePaymentMethodClick("iDeal")}
                                    >
                                        <img src={idealLogo} alt="iDeal" className="payment-method-image" />
                                    </div>

                                    <div
                                        className={`payment-method ${selectedPaymentMethod === "PayPal" ? "selected" : ""}`}
                                        onClick={() => handlePaymentMethodClick("PayPal")}
                                    >
                                        <img src={paypalLogo} alt="PayPal" className="payment-method-image" />
                                    </div>
                                </div>

                                <div className="checkbox-container-flex">
                                    <input
                                        data-testid="cypress-checkout-input-checkbox"
                                        type="checkbox"
                                        id="agreeCheckbox"
                                        checked={isCheckboxChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor="agreeCheckbox" className="checkout-agreeCheckbox">
                                        I have read and agree to the general terms of Ticketpass
                                    </label>
                                </div>
                        
                            <input type="submit" className="button-makeOrder" value="PROCEED"/>
                        
                        </div>
                        </form>

                        <div className='checkout-grid-right'>

                            <div className='checkout-concert-info-box'>
                                
                                <div className='checkout-concert-info-heading'>
                                    <h1 className='checkout-remove-margin'>{concertData.artist}</h1>
                                </div>
                                
                                <div className='checkout-concert-info-description'>
                                    
                                    <h1 className='checkout-remove-margin'>Venue: {concertData.venue}</h1>
                                    <h1 className='checkout-remove-margin'>Date: {format(new Date(concertData.date), 'dd-MM-yyyy HH:mm')}</h1>
                                    <h1 className='checkout-remove-margin'>Location: {concertData.city}</h1>
                                        
                                        <div className='checkout-concert-info-description-price'>
                                            <h1 className='checkout-remove-margin'>TOTAL PRICE: {price.toFixed(2)}€</h1>
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