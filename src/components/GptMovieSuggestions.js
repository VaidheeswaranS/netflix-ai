import React from "react";
import { useSelector } from "react-redux";
import NowPlayingMovieList from "./NowPlayingMovieList";

const GptMovieSuggestions = () => {
  const { gptSuggestedMovies, gptSuggestedMovieResults, isLoading } =
    useSelector((store) => store.gpt);

  if (isLoading)
    return (
      <p className="bg-black opacity-80 text-white px-16 py-8 font-bold text-2xl">
        Page is loading...
      </p>
    );

  return (
    gptSuggestedMovies &&
    gptSuggestedMovieResults && (
      <div>
        <div className="gpt-movies-list bg-black opacity-80">
          {gptSuggestedMovies.map((movie, index) => {
            // only render the movie if it has a value
            if (gptSuggestedMovieResults[index].length > 0) {
              return (
                <NowPlayingMovieList
                  key={movie}
                  title={movie}
                  nowPlayingMovies={gptSuggestedMovieResults[index]}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    )
  );
};

export default GptMovieSuggestions;
