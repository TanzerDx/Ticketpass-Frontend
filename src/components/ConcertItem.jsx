import "../styles/styles.components/ConcertItem.css"
import React from "react";
import {format} from "date-fns";
import { useNavigate} from 'react-router-dom';

function ConcertItem(props) {

  const navigateTo = useNavigate();

  const handleMoreInfoClick = () => {
    navigateTo(`/concert?id=${props.concertItem.id}`);
  };
    

    return (
      <>
          <div className="concert-item">
          
            <img src={props.concertItem.photoURL} alt="Artist" className="concert-image" />
            
            <div className="concert-text">
              <h1 className="concert-text-margin">{props.concertItem.artist}</h1>    
            </div>
          
            
            <div className="additional-info">
              <div className="concerts-additional-info-artist">
                  <h1 id="concerts-additional-info-margin">{props.concertItem.artist}</h1>
              </div>

              <div className="concerts-additional-info-desc">
                <h1 id="concerts-additional-info-margin">Venue: {props.concertItem.venue}</h1>
                <h1 id="concerts-additional-info-margin">Time: {format(new Date(props.concertItem.date), 'yyyy-MM-dd HH:mm:ss')}</h1>
                <h1 id="concerts-additional-info-margin">Location: {props.concertItem.city}</h1>
              </div>

              <button type="button" className="button-moreInfo" name="moreInfo" onClick={handleMoreInfoClick}> MORE INFO</button>

            </div>

          </div>
      </>
    )
  }
  
  export default ConcertItem;