import React from "react";
import MainVideoTitle from "./MainVideoTitle";
import MainVideoBackground from "./MainVideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // this is called early return

  return (
    <div>
      <MainVideoTitle />
      <MainVideoBackground />
    </div>
  );
};

export default MainContainer;
