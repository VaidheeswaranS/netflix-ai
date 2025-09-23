import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";
import { validateSignIn, validateSignUp } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const handleSignInSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const phoneNumber = useRef(null);

  const userFormSubmit = () => {
    // form validation happening
    let message;
    if (isSignInForm) {
      message = validateSignIn(email.current.value, password.current.value);
    } else {
      message = validateSignUp(
        email.current.value,
        password.current.value,
        userName.current.value,
        phoneNumber.current.value
      );
    }
    setErrorMessage(message);

    // Only proceed to Authenication if validation is successful
    if (message != null) return;

    if (!isSignInForm) {
      // Sign Up happening
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // updating the user profile with displayName once registered("onAuthStateChanged" in Body.js)
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;

              dispatcher(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(
                "Error during user profile update" +
                  errorCode +
                  " " +
                  errorMessage
              );
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Error during sign-up" + errorCode + " " + errorMessage
          );
        });
    } else {
      // Sign In happening
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user); // to be removed later.. added for debugging
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("Email address or Password is wrong. Please check");
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div className=" image-container absolute">
        <img src={NETFLIX_BACKGROUND_IMAGE} alt="netflix-bg-image" />
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="forms-container w-3/12 p-12 absolute bg-black bg-opacity-70 my-40 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="sign-in-heading text-3xl font-bold mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={userName}
              className="username-input bg-black border border-gray-100 rounded-md p-3 mb-3 w-full"
              type="text"
              placeholder="Name"
            />
            <input
              ref={phoneNumber}
              className="phone-no-input bg-black border border-gray-100 rounded-md p-3 mb-3 w-full"
              type="number"
              placeholder="Phone Number"
            />
          </div>
        )}
        <input
          ref={email}
          className="email-input bg-black border border-gray-100 rounded-md p-3 mb-3 w-full"
          type="text"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="password-input bg-black border border-gray-100 rounded-md p-3 mb-3 w-full"
          type="password"
          placeholder="Password"
        />
        <p className="form-error-message text-red-500 font-semibold mb-2">
          {errorMessage}
        </p>
        <button
          className="sign-in-button bg-red-500 rounded-md p-3 mb-3 text-center w-full cursor-pointer"
          onClick={userFormSubmit}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              userFormSubmit();
            }
          }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="text-gray-400">
            New to Netflix?
            <span
              onClick={handleSignInSignUp}
              className="text-white font-semibold cursor-pointer"
            >
              &nbsp;Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-400">
            Already have an account?
            <span
              onClick={handleSignInSignUp}
              className="text-white font-semibold cursor-pointer"
            >
              &nbsp;Sign in now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
