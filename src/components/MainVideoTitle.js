import React from "react";

const MainVideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title-main-div py-36 px-6">
      <h1 className="movie-title text-5xl font-bold w-1/3">{title}</h1>
      <p className="movie-description py-2 text-lg w-1/4 leading-tight">
        {overview}
      </p>
      <div>
        <button className="play-button bg-black text-white rounded-lg px-5 py-1 mr-2">
          ▶ Play
        </button>
        <button className="more-info-button bg-gray-600 text-white font-semibold rounded-lg px-7 py-1">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainVideoTitle;
