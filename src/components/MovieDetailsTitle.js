import React from "react";
import { useSelector } from "react-redux";
import useAddMovieDetails from "../hooks/useAddMovieDetails";

const MovieDetailsTitle = ({ movieId }) => {
  useAddMovieDetails(movieId);

  const movieDetails = useSelector((store) => store.movies?.movieDetails);

  console.log(movieDetails);

  return (
    movieDetails && (
      <div>
        <div className="video-title-main-div w-screen aspect-video pt-60 px-16 absolute text-white bg-gradient-to-r from-black">
          <h1 className="movie-title text-5xl font-bold w-1/3 mb-4">
            {movieDetails?.title}
          </h1>
          <p className="movie-description py-2 text-lg w-2/4 leading-tight mb-6">
            {movieDetails?.overview}
          </p>
          <p className="adult-status py-2 text-lg w-2/4 leading-tight mb-6">
            Adult Status:{" "}
            {movieDetails?.adult ? "Adult Movie" : "Non-Adult Movie"}
          </p>
          <p className="origin-country py-2 text-lg w-2/4 leading-tight mb-6">
            Origin Country: {movieDetails?.origin_country[0]}
          </p>
          <p className="release-date py-2 text-lg w-2/4 leading-tight mb-6">
            Released: {movieDetails?.release_date}
          </p>

          {/* <div>
          <button className="play-button bg-white text-black hover:opacity-80 rounded-lg px-5 py-1 mr-2">
            ▶ {languageConstants[langKey].play}
          </button>
          <button className="more-info-button bg-gray-600 hover:opacity-50 text-white font-semibold rounded-lg px-7 py-1">
            {languageConstants[langKey].moreInfo}
          </button>
        </div> */}
        </div>
      </div>
    )
  );
};

export default MovieDetailsTitle;
