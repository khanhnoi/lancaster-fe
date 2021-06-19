import React from "react";
// import { Link } from "react-router-dom";
// import left from "../../assets/images/left.svg";
// import Carousel from "react-multi-carousel";
import { Parallax } from "react-parallax";

const MainProject = (props) => {
  const { bg, id, onWheel, bigTitle, customStrength } = props;

  return (
    <>
      <div className="section" onWheel={onWheel}>
        <section
          className="container-fluid location-header"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="location-header-bg bg-cover-dark"></div>
          <div className="location-header-content" id={id}>
            <div className="location-header-content-title">
              <p>{bigTitle}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainProject;
