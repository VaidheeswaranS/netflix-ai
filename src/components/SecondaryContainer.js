import React from "react";
import NowPlayingMovieList from "./NowPlayingMovieList";
import { useSelector } from "react-redux";
import PopularMoviesList from "./PopularMoviesList";
import TopRatedMoviesList from "./TopRatedMoviesList";
import UpcomingMoviesList from "./UpcomingMoviesList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    nowPlaying && (
      <div className="main-secondary-container bg-black">
        <div className="mini-secondary-container -mt-[200px] relative z-30">
          <NowPlayingMovieList
            title={"Now Playing"}
            nowPlayingMovies={nowPlaying}
          />

          <PopularMoviesList title={"Popular"} nowPlayingMovies={nowPlaying} />

          <TopRatedMoviesList
            title={"Top Rated"}
            nowPlayingMovies={nowPlaying}
          />

          <UpcomingMoviesList
            title={"Upcoming"}
            nowPlayingMovies={nowPlaying}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
