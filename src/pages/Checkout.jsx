import '../styles/Checkout.css';
import React, {useState, useEffect} from "react";
import paypalLogo from '../assets/paypal-logo-C83095A82C-seeklogo.com.png';
import cardLogo from '../assets/credit-card-black-png-0.png';
import idealLogo from '../assets/ideal-logo-1024.png';

function Checkout() {

    const concertData = JSON.parse(sessionStorage.getItem("concertItem"));

    const [numberOfTickets, setNumberOfTickets] = useState(1);
    
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

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    const handlePaymentMethodClick = (name) => {
      setSelectedPaymentMethod(name);
      
      console.log(name);
    };


    return (
        <>
            <div className='background-color-checkout'>
                
                <div className="content">
                
                    <div className='checkout-heading'>
                        <h1 className='remove-margin'>Checkout</h1>
                    </div>

                    <div className='checkout-grid'>

                        <div className='checkout-grid-left'>
                            <div className='checkout-concert-info-box'>
                                
                                <div className='checkout-concert-info-heading'>
                                    <h1 className='remove-margin'>{concertData.artist}</h1>
                                </div>
                                
                                <div className='checkout-concert-info-description'>
                                    <h1 className='remove-margin'>Venue: {concertData.venue}</h1>
                                    <h1 className='remove-margin'>Time: {concertData.date}</h1>
                                    <h1 className='remove-margin'>Location: {concertData.city}</h1>
                                </div>
                            
                            </div>
                        </div>

                        <div className='checkout-grid-right'>

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
                                    />  
                                </div>

                                <div className='checkout-validation-text'>
                                    <h1 className='remove-margin'>Phone Number: </h1>
                                </div>
                                <div className='checkout-container'>
                                    <input
                                        type="text"
                                        name="phoneNum"
                                        className="checkout-input"
                                        placeholder=""
                                        required
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
                        
                            <button type="button" className="button-makeOrder" name="makeOrder">PROCEED</button>
                        
                        </div>

                    </div>
            
                </div>
            </div>
        </>
    )
}

export default Checkout;