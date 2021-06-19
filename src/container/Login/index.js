import React from "react";
import { Link } from "react-router-dom";
import logoBanner from "./../../assets/images/banner-login.jpg";

const Login = (props) => {
  return (
    <section className="login-page">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login-form">
            <div className="form-body">
              <h1 className="title">LOG IN</h1>
              <p className="title description">
                Please enter your email and password to access the VIP members
                portal.
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control form-input form-input-email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control form-input form-input-password"
                  />
                  <div className="form-link-block">
                    <div className="checkbox-form">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                    <Link to="/" className="link-forgot">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="form-button">
                  <button className="btn btn-custom">Login</button>
                  <button className="btn btn-custom">Create Account</button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="login100-banner"
            style={{ backgroundImage: `url(${logoBanner})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
