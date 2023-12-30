import '../styles/ThankYou.css';
import {format} from 'date-fns';
import {NavLink} from "react-router-dom"


function ThankYou() {

    const concert = JSON.parse(localStorage.getItem("concertItem"))
    const orderId = JSON.parse(localStorage.getItem("orderId"))

    return (
        <>
            <div className='background-color-thankyou'>
                
                <div className="content">
                    <div className='thankyou-heading'>
                        <h1 className='remove-margin-thankyou'>THANK YOU FOR YOUR ORDER!</h1>
                    </div>
                    
                    <div className='thankyou-grid'>
                        <div className='thankyou-flex'>
                            <h1 className='thankyou-info-margin'>ORDER ID: {orderId}</h1>
                            <h1 className='thankyou-info-margin'>ARTIST: {concert.artist}</h1>
                            <h1 className='thankyou-info-margin'>DATE: {format(new Date(concert.date), 'dd-MM-yyyy HH:mm')}</h1>
                            <h1 className='thankyou-info-margin'>VENUE: {concert.venue}</h1>
                        </div>

                    <NavLink to="/tickets" id="tickets-link">
                        <button type="button" name="go-to-tickets" className="button-toTickets">SEE YOUR TICKETS</button>
                    </NavLink>

                    </div>
                </div>
            
            </div>
        </>
    )
}

export default ThankYou;