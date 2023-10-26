import React from "react"
import "../styles/styles.components/ConcertItem.css"

function ConcertItem(props) {


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
                <h1 id="concerts-additional-info-margin" className="concerts-additional-info-desc-truncate">{props.concertItem.desc}</h1>
              </div>

              <button type="button" className="button-moreInfo" name="moreInfo">MORE INFO</button>

            </div>

          </div>
      </>
    )
  }
  
  export default ConcertItem;