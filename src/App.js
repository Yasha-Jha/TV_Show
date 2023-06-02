import React, { useState } from "react";
import ShowList from "./ShowList";
import ShowSummary from "./ShowSummary";
import styles from "./ShowList.module.css";

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [ticketBookingData, setTicketBookingData] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (showName) => {
    const ticketData = {
      showName,
      // Add more relevant details for ticket booking
    };

    setTicketBookingData(ticketData);
  };

  return (
    <div>
      {selectedShow ? (
        <ShowSummary show={selectedShow} onBookTicket={handleBookTicket} />
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}

      {ticketBookingData && (
        <div className={styles.Summary}>
          <h2>Book Ticket</h2>
          <p>Movie: {ticketBookingData.showName}</p>
          {/* Add the ticket booking form here */}
        </div>
      )}
    </div>
  );
};

export default App;
