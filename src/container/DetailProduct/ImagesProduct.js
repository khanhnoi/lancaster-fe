import React from "react";
import Carousel from "react-multi-carousel";

import BeerSlider from "./BeerSlider";

const ImagesProduct = ({ type, img }) => {
  const TYPE_GALLERY = "gallery";
  const TYPE_SCHEMA = "schema";

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 700 },
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

  if (!type) {
    return <img src={img} className="fadeIn" alt="Detail" />;
  } else {
    if (type === TYPE_GALLERY) {
      return (
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots
          autoPlay={true}
          containerClass="product_container_carousel"
          className="product_carousel"
          sliderClass="product_carousel--slide"
          dotListClass="product_dot_list"
          autoPlaySpeed={3500}
          infinite={true}
        >
          {img.length !== 0 &&
            img.map((item, idx) => (
              <div
                style={{
                  background: `url(${item}) center`,
                  height: "100%",
                  width: "100%",
                }}
                key={idx.toString()}
              />
            ))}
        </Carousel>
      );
    }
    if (type === TYPE_SCHEMA) {
      return <BeerSlider beforeImg={img[0]} afterImg={img[1]} />;
    }
  }
};

export default ImagesProduct;
