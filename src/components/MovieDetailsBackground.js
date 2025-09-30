import React from "react";
import { useSelector } from "react-redux";
import useMovieDetailsTrailer from "../hooks/useMovieDetailsTrailer";

const MovieDetailsBackground = ({ movieId }) => {
  useMovieDetailsTrailer(movieId);

  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  return (
    movieTrailer && (
      <div className="trailer-video-container w-screen">
        <iframe
          className="trailer-video w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            movieTrailer?.key +
            "?&autoplay=1&controls=0&loop=1&mute=1&rel=0&playlist=" +
            movieTrailer?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    )
  );
};

export default MovieDetailsBackground;
