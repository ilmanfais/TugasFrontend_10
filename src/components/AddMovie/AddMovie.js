import React, { useState } from "react";
import styles from "./AddMovie.module.css";

const AddMovie = (props) => {
  //props yang data nya berasal dari main
  const { movies, setMovies } = props;

  // state yang menghandle proses inputan
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  // arrow function manghandlw inputan title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // arrow function menghandle inputan date
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const genreOptions = ["Action", "Drama", "Horor", "Comedy"];
  // arrow func menghandle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" && date === "") {
      alert("title dan date kosong");
    } else if (title === "") {
      alert("title kosong");
    } else if (date === "") {
      alert("date kosong");
    } else {
      const movie = {
        id: 4,
        title: title,
        date: date,
        Image: image,
        genre: genre,
      };
      setMovies([...movies, movie]);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.addmovie} onSubmit={handleSubmit}>
        <input
          className={styles.addmovie__input}
          id="title"
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="Masukkan Title"
        />
        <input
          className={styles.addmovie__input}
          id="date"
          type="date"
          value={date}
          onChange={handleDate}
        />
        <input
          className={styles.addmovie__input}
          id="image"
          type="text"
          value={image}
          onChange={handleImage}
          placeholder="Masukkan Link"
        />
        <select
          className={styles.addmovie__input}
          id="genre"
          value={genre}
          onChange={handleGenre}
          placeholder="Masukkan genre"
        >
          <option value="" disabled>
            Select a genre
          </option>
          {genreOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
                 
        </select>
        <button className={styles.addmovie__button}>simpan</button>
      </form>
    </div>
  );
};

export default AddMovie;
