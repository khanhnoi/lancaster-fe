import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-loading.svg";
import videoLoading from "../../assets/images/video-loading.mp4";
const Homepage = (props) => {
  let {} = props;

  return (
    <>
      <section className="loading-section">
        <div className="container-fluid">
          <div className="row">
            <div className="loading-video">
              <video muted autoPlay loop>
                <source src={videoLoading} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className="loading-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="loading-text-button">
            <Link to="/overview">
              <button>Discover</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
