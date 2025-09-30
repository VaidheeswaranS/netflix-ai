import React from "react";
import MovieDetailsTitle from "./MovieDetailsTitle";
import MovieDetailsBackground from "./MovieDetailsBackground";
import { useParams } from "react-router-dom";

const MovieDetailsContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <MovieDetailsTitle movieId={id} />
      <MovieDetailsBackground movieId={id} />
    </div>
  );
};

export default MovieDetailsContainer;
