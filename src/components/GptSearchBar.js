import React from "react";
import { useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.appConfig?.lang);
  return (
    <div>
      <div className="search-container pt-[10%] mb-7 flex flex-row justify-center items-center">
        <input
          className="search-input w-[450px] py-2 px-3 border border-r-0 border-gray-500 rounded-l-lg shadow-xl"
          type="text"
          placeholder={languageConstants[langKey].gptSearchPlaceholder}
        />
        <button className="search-button bg-red-700 text-white font-semibold py-2 px-3 rounded-r-lg border border-gray-500 border-l-0">
          {languageConstants[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
