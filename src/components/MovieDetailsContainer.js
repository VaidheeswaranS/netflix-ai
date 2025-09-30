import React from "react";
import MovieDetailsTitle from "./MovieDetailsTitle";
import MovieDetailsBackground from "./MovieDetailsBackground";
import { useParams } from "react-router-dom";
import useAddMovieDetails from "../hooks/useAddMovieDetails";
import useMovieDetailsTrailer from "../hooks/useMovieDetailsTrailer";

const MovieDetailsContainer = () => {
  const { id } = useParams();

  useAddMovieDetails(id);
  useMovieDetailsTrailer(id);

  return (
    <div>
      <MovieDetailsTitle movieId={id} />
      <MovieDetailsBackground movieId={id} />
    </div>
  );
};

export default MovieDetailsContainer;
