import React from "react";

const MainVideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title-main-div w-screen aspect-video pt-60 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="movie-title text-5xl font-bold w-1/3 mb-4">{title}</h1>
      <p className="movie-description py-2 text-lg w-1/4 leading-tight mb-6">
        {overview}
      </p>
      <div>
        <button className="play-button bg-white text-black hover:opacity-80 rounded-lg px-5 py-1 mr-2">
          ▶ Play
        </button>
        <button className="more-info-button bg-gray-600 hover:opacity-50 text-white font-semibold rounded-lg px-7 py-1">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainVideoTitle;
