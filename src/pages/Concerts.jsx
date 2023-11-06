import '../styles/Concerts.css';
import React, {useState, useEffect} from "react";
import ConcertService from '../services/ConcertService';
import ConcertList from '../components/ConcertList';

function Concerts() {

    const [concerts, setConcerts] = useState([]);

    useEffect (() => {
        ConcertService.getAllConcerts()
        .then(data => setConcerts(data))
    }, []); 

    return (
        <>
            <div className='background-color-concerts'>
                
                <div className="content">
                
                    <div className='concerts-heading'>
                        <h1 className='concerts-heading-margin'>Concerts</h1>
                    </div>
                        
                    <ConcertList concerts={concerts}/>
                
                </div>
            
            <div className='concerts-tiny-text'>     
                <h1>Ticketpass© is a project made by Hristo Ganchev, third-semester student at Fontys University of Applied Sciences. Copying is forbidden and may lead to
                    plagiarism accusations
                </h1>
            </div>
            
            </div>
        </>
    )
}

export default Concerts;