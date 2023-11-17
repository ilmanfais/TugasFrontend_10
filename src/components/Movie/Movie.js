import styles from "./Movie.module.css";
import React from "react";

function Movie (props) {
    const { title, date, Image, genre } = props
  return (
    <div className={styles.movie}>
        <img className={styles.movie__image} src= {Image} alt= "" />
        <h3 className={styles.movie__title}>{title}</h3>
        <p className={styles.movie__genre}>{genre}</p>
        <p className={styles.movie__date}>{date}</p>
    </div>
  );
}

export default Movie;