import React from "react";
import MovieCards from "./MovieCards";

const UpcomingMoviesList = ({ title, upcomingMovies }) => {
  return (
    <div className="text-white bg-transparent">
      <h1 className="upcoming-movies-title text-2xl font-bold px-16 py-4">
        {title}
      </h1>
      <div className="overflow-hidden px-16">
        <div className="upcoming-movies-container flex overflow-x-auto scrollbar-hide">
          {upcomingMovies.map((movie) => (
            <MovieCards
              key={movie.id}
              movieId={movie.id}
              poster={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMoviesList;
