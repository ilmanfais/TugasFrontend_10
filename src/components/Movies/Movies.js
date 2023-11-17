import styles from "./Movies.module.css";
import Movie from "../Movie/Movie"

const Movies = (props) => {

    const { item } = props

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Lates Movie</h2>
                <div className={styles.movie__container}>
                    {
                        item.map(function(data) {
                            return (
                                
                                <Movie key={data.id} title= {data.title} date= {data.date} Image={data.Image} genre={data.genre}/>
                                
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Movies;