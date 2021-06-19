import React from "react";
import { Link } from "react-router-dom";
import left from "../../assets/images/left.svg";
import Carousel from "react-multi-carousel";

const MainOverview = (props) => {
  const {
    bg,
    img,
    order,
    id,
    onWheel,
    title,
    text,
    button,
    extra,
    link,
    bigTitle,
  } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section
        className="overview-main"
        style={{ backgroundImage: `url(${bg})` }}
        onWheel={onWheel}
      >
        {bigTitle ? (
          <div className="overview-main-box" id={id}>
            <p>{bigTitle}</p>
          </div>
        ) : (
          <>
            <div className="shadow"></div>
            <div className="container ">
              <div className="row">
                <div
                  className={
                    img
                      ? "col-md-5  overview-main-left"
                      : "col-md-7  overview-main-left"
                  }
                  style={{ order: order }}
                  id={id}
                >
                  <div className="overview-main-left-header">
                    <p>{extra}</p>
                  </div>
                  <div className="overview-main-left-title">
                    <p>{title}</p>
                  </div>
                  <div className="overview-main-left-text">
                    <p>{text}</p>
                  </div>
                  <div className="overview-main-left-button">
                    <button>
                      <Link to={link}>
                        {button} <img src={left} alt="" />
                      </Link>
                    </button>
                  </div>
                </div>
                {img ? (
                  <div
                    className={img ? "col-md-6 " : "col-md-5 "}
                    id={img ? `img-${id}` : ""}
                  >
                    <div className="overview-main-right">
                      <Carousel
                        responsive={responsive}
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        showDots
                        infinite={true}
                      >
                        {img.map((item, index) => {
                          return (
                            <img key={index.toString()} src={item} alt="Map" />
                          );
                        })}
                      </Carousel>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default MainOverview;
