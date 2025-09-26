import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <div className="search-container pt-[10%] mb-7 flex flex-row justify-center items-center">
        <input
          className="search-input w-[450px] py-2 px-3 border border-r-0 border-gray-500 rounded-l-lg shadow-xl"
          type="text"
          placeholder="what would you like to watch today?"
        />
        <button className="search-button bg-red-700 text-white font-semibold py-2 px-3 rounded-r-lg border border-gray-500 border-l-0">
          Search
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
