import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddMovieDetails = (movieId) => {
  const dispatcher = useDispatch();
  const movieDetails = useSelector((store) => store.movies?.movieDetails);

  useEffect(() => {
    !movieDetails && getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();

    // adding movie details to redux store
    dispatcher(addMovieDetails(json));
  };
};

export default useAddMovieDetails;
