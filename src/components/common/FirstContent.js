import React from "react";
import { Parallax } from "react-parallax";
const TYPE_CONTENT = {
  TEXT: "text",
  CARD: "card",
};
const FirstContent = ({ type, onWheel, bg, id, title, text, button }) => {
  if (type === TYPE_CONTENT.CARD)
    return (
      <section
        className="first_content"
        style={{ backgroundImage: `url(${bg})` }}
        onWheel={onWheel}
      >
        <div className="shadow-small"></div>
        <div className="container">
          <div className="row " id={id}>
            <div className="col-md-8 col-lg-6">
              <div className="first_content-card left-to-right">
                <div className="first_content-card-line"></div>
                <div className="first_content-card-title">
                  <p>{title}</p>
                </div>
                <div className="first_content-card-text">
                  <p>{text}</p>
                </div>
                <div className="first_content-card-box">
                  <div className="first_content-card-box-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>{button}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else
    return (
      <div className="section" onWheel={onWheel}>
        <Parallax bgImage={bg} strength={500}>
          <section className="container-fluid first_content_text">
            <div className="first_content_text-bg bg-cover-dark"></div>
            <div className="first_content_text-content" id={id && id}>
              <div className="first_content_text-content-title">
                <p>{title}</p>
              </div>
            </div>
          </section>
        </Parallax>
      </div>
    );
};

export default FirstContent;
