import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import "../Styles/styles.css";
const SocialLogin = () => {
  return (
    <div id="socialLogin">
      <p className="line">Or</p>
      <div className="btn-group">
        <button type="button" className="btn">
          <BsGoogle />
        </button>
        <button type="button" className="btn">
          <BsGithub />
        </button>
        <button type="button" className="btn">
          <BsFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
