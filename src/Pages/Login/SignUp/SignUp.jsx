import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "../Styles/styles.css";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <section className="signUp-container">
      <div className="form-wrapper">
        <h1>
          Sign Up into <span className="colorize">Account</span>
        </h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <div className="input-group">
            <label htmlFor="cmfPassword">Confirm Password</label>
            <input
              type="password"
              id="cmfPassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="input-group">
            <button type="submit" className="btn">
              Sign In
            </button>
          </div>
          <SocialLogin />
          <p>
            Already have an Account?
            <span
              className="colorize cursor-pointer"
              onClick={() => navigate("/login")}
            >
              {" "}
              Sign In
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
