import React from "react";
import MainVideoTitle from "./MainVideoTitle";
import MainVideoBackground from "./MainVideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // this is called early return
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <MainVideoTitle title={original_title} overview={overview} />
      <MainVideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
