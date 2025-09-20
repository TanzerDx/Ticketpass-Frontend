import React from "react";
import "../styles/styles.components/ConcertList.css";
import ConcertItem from "./ConcertItem";

function ConcertList(props) {
  return (
    <>
      <div className="concerts-field">
        {props.concerts.map((concertItem) => (
          <ConcertItem key={concertItem.id} concertItem={concertItem} />
        ))}
      </div>
    </>
  );
}

export default ConcertList;
