import React from "react";
import MovieCards from "./MovieCards";

const TopRatedMoviesList = ({ title, nowPlayingMovies }) => {
  console.log(nowPlayingMovies);

  return (
    <div className="text-white bg-transparent">
      <h1 className="top-rated-movies-title text-2xl font-bold px-16 py-4">
        {title}
      </h1>
      <div className="overflow-hidden px-16">
        <div className="top-rated-movies-container flex overflow-x-auto scrollbar-hide">
          {nowPlayingMovies.map((movie) => (
            <MovieCards key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedMoviesList;
