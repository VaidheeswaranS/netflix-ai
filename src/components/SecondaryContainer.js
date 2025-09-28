import React from "react";
import NowPlayingMovieList from "./NowPlayingMovieList";
import { useSelector } from "react-redux";
import PopularMoviesList from "./PopularMoviesList";
import TopRatedMoviesList from "./TopRatedMoviesList";
import UpcomingMoviesList from "./UpcomingMoviesList";
import languageConstants from "../utils/languageConstants";

const SecondaryContainer = () => {
  const langKey = useSelector((store) => store.appConfig?.lang);
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store) => store.movies?.popularMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  const upcoming = useSelector((store) => store.movies?.upcomingMovies);

  return (
    nowPlaying &&
    popular &&
    topRated &&
    upcoming && (
      <div className="main-secondary-container bg-black">
        <div className="mini-secondary-container -mt-[200px] relative z-30">
          <NowPlayingMovieList
            title={languageConstants[langKey].nowPlaying}
            nowPlayingMovies={nowPlaying}
          />

          <PopularMoviesList
            title={languageConstants[langKey].popular}
            popularMovies={popular}
          />

          <TopRatedMoviesList
            title={languageConstants[langKey].topRated}
            topRatedMovies={topRated}
          />

          <UpcomingMoviesList
            title={languageConstants[langKey].upcoming}
            upcomingMovies={upcoming}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
