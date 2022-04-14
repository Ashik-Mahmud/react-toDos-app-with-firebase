import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "../Styles/styles.css";
const Login = () => {
  const navigate = useNavigate();
  const [reset, setReset] = useState(false);
  return (
    <section className="login-container">
      <div className="form-wrapper">
        {reset ? (
          <h1>
            Reset <span className="colorize">Password</span>
          </h1>
        ) : (
          <h1>
            Sign In into <span className="colorize">Account</span>
          </h1>
        )}
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          {!reset && (
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
          )}
          {reset ? (
            <p>
              Go to
              <span
                className="colorize cursor-pointer"
                onClick={() => setReset((prev) => !prev)}
              >
                {" "}
                home
              </span>
            </p>
          ) : (
            <p>
              Forget Password?
              <span
                className="colorize cursor-pointer"
                onClick={() => setReset((prev) => !prev)}
              >
                {" "}
                Reset
              </span>
            </p>
          )}

          <div className="input-group">
            <button type="submit" className="btn">
              {reset ? " Reset" : " Sign In"}
            </button>
          </div>
          {!reset && <SocialLogin />}
          <p>
            Not yet Account?
            <span
              onClick={() => navigate("/sign-up")}
              className="colorize cursor-pointer"
            >
              {" "}
              Create
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
