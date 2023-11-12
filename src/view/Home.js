import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "../components/Movie";
import "../css/Home.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const movieList = (await axios.get("https://yts.mx/api/v2/list_movies.json")).data.data.movies;
        setMovies(movieList);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className="container">
        <h1>영화 리스트</h1>
        {loading ? (
            <div className="loader">
            <span className="loader_text">로딩중...</span>
            </div>
        ) : (
            <div className="movies">
            {movies.map((movie, i) => (
                <Movies
                key={i}
                id={movie.id}
                img={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
                />
            ))}
            </div>
        )}
        </section>
    );
}

export default Home;
