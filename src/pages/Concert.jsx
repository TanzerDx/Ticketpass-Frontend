import '../styles/Concert.css';
import ConcertService from '../services/ConcertService';
import {format} from "date-fns";
import { useLocation } from 'react-router-dom';
import React, {useState, useEffect} from "react";

function Concert() {
    
    const [concertItem, setConcertItem] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");

    useEffect(() => {

        ConcertService.getConcert(id)
            .then(data => setConcertItem(data))
            .catch(error => {
            console.error("Error fetching concert data:", error);

            if (error.response.status === 401)
            {
                localStorage.removeItem('accessToken');
            }
            
            });
        
    }, []);

    const handleBuyTicketsClick = () => {
        sessionStorage.setItem("concertItem", JSON.stringify(concertItem));
        const user = localStorage.getItem("accessToken");

        if (user === null)
        {
            window.location.href="/signin"
        }
        else {
            window.location.href="/checkout"
        }
      };


    if (concertItem === null) {
        
        
        return <div>Loading...</div>;
      }    


    return (
        <>
            <div className='background-color-concert'>
                
                <div className="content">
                
                    <div className="concert-grid">
                        
                        <div className="concert-grid-left">
                            <div className='artist-name'>
                                <h1 className='concert-remove-margin'>{concertItem.artist}</h1>
                            </div>
                                            
                            <div className='artist-description'>
                                <h1 className='concert-remove-margin'>{concertItem.description}</h1>
                            </div>

                            <div className='concert-details'>
                                <h1 className='concert-remove-margin'>VENUE: {concertItem.venue}</h1>
                                <h1 className='concert-remove-margin'>DATE: {format(new Date(concertItem.date), 'dd-MM-yyyy HH:mm')}</h1>
                                <h1 className='concert-remove-margin'>LOCATION: {concertItem.city}  </h1>
                            </div>

                        </div>

                        <div className="concert-grid-right">
                            <img src={concertItem.photoURL} alt="Artist" className="artist-picture" />
                            
                            {concertItem.ticketsRemaining > 0 ? (
                                <button data-testid="cypress-buyTickets-form" type="button" className="button-buyTickets" name="buyTickets" onClick={handleBuyTicketsClick}>
                                    BUY TICKETS
                                </button>
                            ) : (
                                <button type="button" className="button-soldOut" name="soldOut">
                                    SOLD OUT
                                </button>
                            )}
                            
                        </div>

                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Concert;