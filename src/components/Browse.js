import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { useDispatch } from "react-redux";
import { clearMovieDetails, clearMovieTrailer } from "../utils/moviesSlice";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const dispatcher = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt?.gptSearchView);
  const movieDetails = useSelector((store) => store.movies?.movieDetails);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  // clearing the movie details and movie trailer from redux store when page mounts
  if (movieDetails) dispatcher(clearMovieDetails());
  if (movieTrailer) dispatcher(clearMovieTrailer());

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
