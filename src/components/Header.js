import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="main-header absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between items-center">
      <img
        className="app-logo w-56 bg-transparent object-cover"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {user && (
        <button
          className="text-white bg-red-500 rounded-lg px-2 py-2 cursor-pointer"
          onClick={handleSignOut}
        >
          Sign out of Netflix
        </button>
      )}
    </div>
  );
};

export default Header;
