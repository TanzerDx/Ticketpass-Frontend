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
            
            </div>
        </>
    )
}

export default Concerts;