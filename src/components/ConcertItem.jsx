import "../styles/styles.components/ConcertItem.css"
import React from "react";

function ConcertItem(props) {

  const truncateText = (text, maxLength) => {
      return text.length <= maxLength ? text : text.slice(0, maxLength) + "…";
  };

  const handleMoreInfoClick = () => {
    sessionStorage.setItem('concertItem', JSON.stringify(props.concertItem));
    window.location.href="/concert"
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
                <h1 id="concerts-additional-info-margin">{truncateText(props.concertItem.description, 220)}</h1>
              </div>

              <button type="button" className="button-moreInfo" name="moreInfo" onClick={handleMoreInfoClick}> MORE INFO</button>

            </div>

          </div>
      </>
    )
  }
  
  export default ConcertItem;