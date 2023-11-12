import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../css/Movie.css";

const Movies = (props) => {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${props.id}`,
          state: props
        }}
      >
        <img src={props.img} alt={props.title} title={props.title}/>
        <div className="movie_data">
          <h3 className="movie_title">{props.title}</h3>
          <h5 className="movie_year">{props.year}</h5>
          <ul className="movie_genres">
            {props.genres.map((genre, index) => (
              <li key={index} className="genres_genre">{genre}</li>
            ))}
          </ul>
          <p className="movie_summary">{props.summary.slice(0, 140)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movies.prototype = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movies;
