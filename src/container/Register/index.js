import React from "react";
import logoBanner from "./../../assets/images/banner-register.png";

const Register = (props) => {
  return (
    <section className="login-page">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login-form">
            <div className="form-body">
              <h1 className="title">Create Account</h1>
              <p className="title description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="form-control form-input form-input-name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control form-input form-input-email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="form-control form-input form-input-phone"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control form-input form-input-password"
                  />
                </div>
                <div className="form-button">
                  <button className="btn btn-custom">Register</button>
                  <button className="btn btn-custom">Login</button>
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

export default Register;
