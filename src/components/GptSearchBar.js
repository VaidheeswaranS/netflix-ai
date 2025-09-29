import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSuggestedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatcher = useDispatch();
  const langKey = useSelector((store) => store.appConfig?.lang);
  const searchText = useRef(null);

  const tmdbMovieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    // this is returning the results from TMDB API
    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Kadalikka Neramillai, Kasi Than Kadavulada, Thillu Mullu, Moondru Mugam, Michael Madana Kama Rajan";

    // Making an API call to GPT
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-oss-120b",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResponse.choices) {
      console.log("Movies not found");
      return;
    }

    const gptSuggestedMovies =
      gptResponse.choices[0]?.message?.content.split(",");

    // tmdbMovieSearch is a async function so it will return Promises, since we are requesting 5 movies we will get 5 promises in array
    const promiseArray = gptSuggestedMovies.map((movie) =>
      tmdbMovieSearch(movie)
    );

    const gptMovieResults = await Promise.all(promiseArray);

    // adding the GPT suggested movie names and movie results to the redux store
    dispatcher(
      addGptSuggestedMovies({
        movieNames: gptSuggestedMovies,
        movieResults: gptMovieResults,
      })
    );
  };

  return (
    <div>
      <div className="search-container pt-[10%] mb-7 flex flex-row justify-center items-center">
        <input
          ref={searchText}
          className="search-input w-[450px] py-2 px-3 border border-r-0 border-gray-500 rounded-l-lg shadow-xl"
          type="text"
          placeholder={languageConstants[langKey].gptSearchPlaceholder}
        />
        <button
          className="search-button bg-red-700 text-white font-semibold py-2 px-3 rounded-r-lg border border-gray-500 border-l-0"
          onClick={handleGptSearch}
        >
          {languageConstants[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
