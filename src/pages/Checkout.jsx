import '../styles/Checkout.css';
import React, {useState, useEffect} from "react";

function Checkout() {

    const concertData = JSON.parse(sessionStorage.getItem("concertItem"));
    console.log(concertData);

    return (
        <>
            <div className='background-color-checkout'>
                
                <div className="content">
                
                    <div className='checkout-heading'>
                        <h1 className='remove-margin'>Checkout</h1>
                    </div>

                
                </div>
            
            </div>
        </>
    )
}

export default Checkout;