import TicketService from "../services/TicketService";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "../styles/Tickets.css";
import OrderService from "../services/OrderService";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderId = localStorage.getItem("orderId");

    if (orderId) {
      OrderService.getOrder(orderId)
        .then((data) => {
          data.date = format(new Date(data.date), "dd-MM-yyyy");
          setOrder(data);

          return TicketService.getTickets(orderId);
        })
        .then((data) => {
          setTickets(data);
        })
        .catch((error) => {
          console.error("Error fetching user or order data:", error);
        });
    }
  }, []);

  function generateQR(ticketKey) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${ticketKey}`;
  }

  return (
    <>
      <div className="background-color-tickets">
        <div className="content">
          {order ? (
            <>
              <div className="tickets-headers-flexbox">
                <div className="tickets-heading">
                  <h1 className="tickets-remove-margin">
                    {order.concert.artist} - TICKETS
                  </h1>
                </div>
                <div className="tickets-order-details">
                  <h1 className="tickets-remove-margin">
                    ORDER ID: {order.id}
                  </h1>
                  <h1 className="tickets-remove-margin">
                    DATE ACQUIRED: {order.date}
                  </h1>
                </div>
              </div>
              <div className="tickets-warning">
                <h1 className="tickets-remove-margin">
                  SECURITY WILL SCAN THE BARCODE(S) AT THE ENTRANCE TO GAIN
                  ACCESS TO THE VENUE
                </h1>
              </div>

              <div className="tickets-field">
                <Carousel className="tickets-field">
                  {tickets &&
                    tickets.map((ticket) => (
                      <div
                        data-testid="cypress-ticket-object"
                        className="ticket-container"
                        key={ticket.id}
                      >
                        <div className="ticket-qr">
                          <img
                            src={generateQR(ticket.qr)}
                            alt={`QR Code for Ticket ${ticket.id}`}
                          />
                        </div>

                        <div className="ticket-artist-name">
                          <h1
                            data-testid="cypress-ticket-artistName"
                            className="tickets-remove-margin"
                          >
                            {order.concert.artist}
                          </h1>
                        </div>

                        <div className="ticket-id-text">
                          <h1
                            data-testid="cypress-ticket-id"
                            className="tickets-remove-margin"
                          >
                            TICKET ID: {ticket.id}
                          </h1>
                        </div>

                        <div className="ticket-name-seating">
                          <h1
                            data-testid="cypress-ticket-name"
                            className="tickets-remove-margin"
                          >
                            NAME: {order.name} {order.surname}
                          </h1>
                          <h1
                            data-testid="cypress-ticket-section"
                            className="tickets-remove-margin"
                          >
                            SECTION: {ticket.venueSection}
                          </h1>
                        </div>
                      </div>
                    ))}
                </Carousel>
              </div>
            </>
          ) : (
            <div className="tickets-heading">
              <h1 className="tickets-heading-margin">LOADING CONTENT...</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Tickets;
