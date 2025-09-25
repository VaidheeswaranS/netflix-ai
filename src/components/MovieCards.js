import React from "react";
import { MOVIE_POSTER_IMAGE } from "../utils/constants";

const MovieCards = ({ poster }) => {
  return (
    <div className="movie-image-container flex-shrink-0 mr-4 w-48">
      <img
        className="movie-image"
        src={MOVIE_POSTER_IMAGE + poster}
        alt="movie-poster"
      />
    </div>
  );
};

export default MovieCards;
