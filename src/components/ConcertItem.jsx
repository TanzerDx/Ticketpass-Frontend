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
          
          </div>
      </>
    )
  }
  
  export default ConcertItem;