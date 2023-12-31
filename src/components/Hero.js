import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [movie, setMovie] = useState("");

  async function getDataApi() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data)
  }

  useEffect(
    function(){
        getDataApi()
        }, []
    );

    console.log(movie);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>
          <p className={styles.hero__description}>{movie.Plot}</p>
          <button className={styles.hero__button}>
            <strong>Watch</strong>
          </button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
