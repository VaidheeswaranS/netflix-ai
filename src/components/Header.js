import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // will be called when user sign-up and sign-in
        const { uid, email, displayName } = auth.currentUser;
        dispatcher(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // will be called when user sign-out
        dispatcher(removeUser());
        navigate("/");
      }
    });

    // Unsubscribing once the header component unmounts from the page
    return () => unsubscribe();
  }, []);

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
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
