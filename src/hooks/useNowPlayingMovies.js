import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatcher = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMoviesList();
  }, []);

  const getNowPlayingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // updating the Now Playing movies list from TMDB to redux store
    dispatcher(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
