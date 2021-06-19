import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TweenMax } from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import amenitiesImg from "../../assets/images/amenities-kn.svg";
import swimmingImg from "../../assets/images/Swimming-pool-kn.svg";
import AmenitiesCard from "./AmenitiesCard";

const Amenities = () => {
  const [active, setActive] = useState(0);
  const [bgImg, setbgImg] = useState([
    amenitiesImg,
    swimmingImg,
    amenitiesImg,
    swimmingImg,
    amenitiesImg,
    swimmingImg,
    amenitiesImg,
  ]);
  const headerMenuElm = document.querySelector(".section-header");
  if (headerMenuElm) headerMenuElm.style.zIndex = "9999";

  const handleChangeActive = (number) => {
    if (number !== active) {
      const bgChange = document.querySelector("#bgChange");
      const titleElm = document.querySelector(
        ".amenities-header-content-title"
      );
      const menuElm = document.querySelector(".amenities-menu");
      const cardElm = document.querySelector(".amenities-card");
      const titleCardElm = document.querySelector(".amenities-card-title");
      const textCardElm = document.querySelector(".amenities-card-text");
      const buttonCardElm = document.querySelector(".amenities-card-button");
      addClass(bgChange, "bg-blur");
      if (titleElm) {
        addClass(titleElm, "bg-blur");
      }
      menuElm.style.pointerEvents = "none";
      let randum = Math.ceil(Math.random() * 3);
      if ((cardElm, titleCardElm, textCardElm, buttonCardElm)) {
        switch (randum) {
          case 1:
            TweenMax.fromTo(
              cardElm,
              0.5,
              {
                y: -500,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              titleCardElm,
              0.5,
              {
                x: -500,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              textCardElm,
              0.5,
              {
                x: 500,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              buttonCardElm,
              0.5,
              {
                y: 1000,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
              }
            );
            break;
          case 2:
            TweenMax.fromTo(
              cardElm,
              0.5,
              {
                y: 500,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              titleCardElm,
              0.5,
              {
                x: 500,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              textCardElm,
              0.5,
              {
                x: -500,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              buttonCardElm,
              0.5,
              {
                y: -1000,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
              }
            );
            break;
          case 3:
            TweenMax.fromTo(
              cardElm,
              0.5,
              {
                x: -500,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              titleCardElm,
              0.5,
              {
                y: -500,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              textCardElm,
              0.5,
              {
                y: 500,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
              }
            );
            TweenMax.fromTo(
              buttonCardElm,
              0.5,
              {
                x: 1000,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
              }
            );
            break;

          default:
            break;
        }
      }
      setTimeout(() => {
        removeClass(bgChange, "bg-blur");
        if (titleElm) removeClass(titleElm, "bg-blur");
        menuElm.style.pointerEvents = "all";
      }, 500);
    }
    if (typeof number === "number") {
      setActive(number);
    }
  };
  const addClass = (elements, myClass) => {
    if (typeof elements === "string") {
      elements = document.querySelectorAll(elements);
    } else if (!elements.length) {
      elements = [elements];
    }

    for (var i = 0; i < elements.length; i++) {
      if (
        !(" " + elements[i].className + " ").indexOf(" " + myClass + " ") > -1
      ) {
        elements[i].className += " " + myClass;
      }
    }
  };

  const removeClass = (elements, myClass) => {
    if (typeof elements === "string") {
      elements = document.querySelectorAll(elements);
    } else if (!elements.length) {
      elements = [elements];
    }

    var reg = new RegExp("(^| )" + myClass + "($| )", "g");

    for (var i = 0; i < elements.length; i++) {
      elements[i].className = elements[i].className.replace(reg, " ");
    }
  };
  const renderContent = (active) => {
    switch (active) {
      case 0:
        return (
          <div className="amenities-header-content-title">
            <p>
              The architecture creates a strong relationship between interior
              and exterior, with windows that create inhabitable facades KN.
            </p>
          </div>
        );
        break;
      case 1:
        return (
          <AmenitiesCard
            title="Swimming pool"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          />
        );
        break;
      case 2:
        return (
          <AmenitiesCard
            title="Spa nalai"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "
          />
        );
        break;
      case 3:
        return (
          <AmenitiesCard
            title="Fitness"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
          />
        );
        break;
      case 4:
        return (
          <AmenitiesCard
            title="library"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
          />
        );
        break;
      case 5:
        return (
          <AmenitiesCard
            title="Screening & performance room"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          />
        );
        break;
      case 6:
        return (
          <AmenitiesCard
            title="Arrival"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          />
        );
        break;

      default:
        return (
          <div className="amenities-header-content-title">
            <p>
              The architecture creates a strong relationship between interior
              and exterior, with windows that create inhabitable facades.
            </p>
          </div>
        );
        break;
    }
  };
  return (
    <>
      <section
        className="container-fluid amenities-header"
        style={{ backgroundImage: `url(${bgImg[0]})` }}
      >
        <div
          className="amenities-header-bg"
          id="bgChange"
          style={{ backgroundImage: `url(${bgImg[active]})` }}
        ></div>
        <div className="amenities-header-bg bg-cover-dark"></div>
        <div className="amenities-header-content">{renderContent(active)}</div>
      </section>

      <div className="container-fluid amenities-fixed">
        <div className="amenities-fixed-content">
          <ul className="amenities-menu">
            <li
              className={active === 0 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(0)}
            >
              Amenities
            </li>
            <div className="amenities-menu-brick"></div>
            <li
              className={active === 1 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(1)}
            >
              Swimming pool
            </li>

            <li
              className={active === 2 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(2)}
            >
              Spa nalai
            </li>

            <li
              className={active === 3 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(3)}
            >
              Fitness
            </li>

            <li
              className={active === 4 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(4)}
            >
              library
            </li>

            <li
              className={active === 5 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(5)}
            >
              Screening & performance room
            </li>

            <li
              className={active === 6 ? "amenities-menu-active" : null}
              onClick={() => handleChangeActive(6)}
            >
              Arrival
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Amenities;
