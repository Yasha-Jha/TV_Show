import React, { useEffect, useState } from "react";
import styles from "./ShowList.module.css";

const ShowList = ({ onSelectShow }) => {
  let [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(shows);
  // shows = shows.map((data) => {
  //   const p = document.createElement("p");
  //   p.innerHTML = data.show.summary;
  //   return {
  //     ...data,
  //     show: { ...data.show, summary: p },
  //   };
  // });
  return (
    <div className={styles.show}>
      <h1>TV Shows</h1>
      {shows.map(
        (show, i) => (
          setTimeout(() => {
            document.querySelector(`#summary${i}`).innerHTML =
              show.show.summary;
          }, 100),
          (
            <div key={show.show.id}>
              <h3>{show.show.name}</h3>
              <span id={"summary" + i}></span>
              <button onClick={() => onSelectShow(show)}>View Summary</button>
            </div>
          )
        )
      )}
    </div>
  );
};

export default ShowList;
