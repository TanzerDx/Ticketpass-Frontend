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

    if (concertItem != null) {
        
        const concertDate = new Date(concertItem.date);
      
        concertItem.date = format(concertDate, 'yyyy-MM-dd');
      }

    useEffect(() => {

        ConcertService.getConcert(id)
            .then(data => setConcertItem(data))
            .catch(error => {
            console.error("Error fetching concert data:", error);
            });
        
    }, []);

    const handleBuyTicketsClick = () => {
        sessionStorage.setItem("concertItem", JSON.stringify(concertItem));
        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (userData === null)
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
                                <h1 className='remove-margin'>{concertItem.artist}</h1>
                            </div>
                                            
                            <div className='artist-description'>
                                <h1 className='remove-margin'>{concertItem.description}</h1>
                            </div>

                            <div className='concert-details'>
                                <h1 className='remove-margin'>VENUE: {concertItem.venue}</h1>
                                <h1 className='remove-margin'>DATE: {concertItem.date}</h1>
                                <h1 className='remove-margin'>LOCATION: {concertItem.city}  </h1>
                            </div>

                        </div>

                        <div className="concert-grid-right">
                            <img src={concertItem.photoURL} alt="Artist" className="artist-picture" />
                            
                            <button type="button" className="button-buyTickets" name="buyTickets" onClick={handleBuyTicketsClick}>BUY TICKETS</button>
                        </div>

                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Concert;