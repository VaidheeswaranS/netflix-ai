import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieDetailsTrailer = (movieId) => {
  const dispatcher = useDispatch();
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    // adding the movie trailer to the redux store
    dispatcher(addMovieTrailer(trailer));
  };
};

export default useMovieDetailsTrailer;
