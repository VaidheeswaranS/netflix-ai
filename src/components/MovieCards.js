import React from "react";
import { MOVIE_POSTER_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCards = ({ movieId, poster }) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <div className="movie-image-container flex-shrink-0 mr-4 w-48">
        <img
          className="movie-image cursor-pointer"
          src={MOVIE_POSTER_IMAGE + poster}
          alt="movie-poster"
        />
      </div>
    </Link>
  );
};

export default MovieCards;
