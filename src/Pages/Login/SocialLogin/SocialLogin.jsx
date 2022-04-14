import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase.config";
import "../Styles/styles.css";
const SocialLogin = () => {
  /* handle Google sign in */
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const navigate = useNavigate();
  if (googleUser || githubUser || facebookUser) {
    navigate("/home");
  }

  return (
    <div id="socialLogin">
      <p className="line">Or</p>
      <div className="btn-group">
        <button
          type="button"
          onClick={() => signInWithGoogle()}
          className="btn"
        >
          <BsGoogle />
        </button>
        <button
          type="button"
          onClick={() => signInWithGithub()}
          className="btn"
        >
          <BsGithub />
        </button>
        <button
          type="button"
          onClick={() => signInWithFacebook()}
          className="btn"
        >
          <BsFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
