import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="main-header absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="app-logo w-56 bg-transparent object-cover"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
    </div>
  );
};

export default Header;
