import React from "react";
import NowPlayingMovieList from "./NowPlayingMovieList";
import { useSelector } from "react-redux";
import PopularMoviesList from "./PopularMoviesList";
import TopRatedMoviesList from "./TopRatedMoviesList";
import UpcomingMoviesList from "./UpcomingMoviesList";

const SecondaryContainer = () => {
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
            title={"Now Playing"}
            nowPlayingMovies={nowPlaying}
          />

          <PopularMoviesList title={"Popular"} popularMovies={popular} />

          <TopRatedMoviesList title={"Top Rated"} topRatedMovies={topRated} />

          <UpcomingMoviesList title={"Upcoming"} upcomingMovies={upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
