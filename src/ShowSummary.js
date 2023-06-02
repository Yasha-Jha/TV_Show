import React from "react";
import styles from "./ShowList.module.css";

const ShowSummary = ({ show, onBookTicket }) => {
  const { name, summary } = show;
  console.log(summary);
  return (
    <div className={styles.Summary}>
      <h1>{name}</h1>
      <p>{summary}</p>
      <button onClick={() => onBookTicket(name)}>Book Ticket</button>
    </div>
  );
};

export default ShowSummary;
