import React, { useEffect, useState } from "react";
import bg from "../../assets/images/tiara-villa.svg";
import bg1 from "../../assets/images/bg1.svg";
import bg2 from "../../assets/images/bg2.svg";
import bg3 from "../../assets/images/bg3.svg";
import bg4 from "../../assets/images/bg4.svg";
import design from "../../assets/images/pexels-ketut-subiyanto-kn.png";
import design2 from "../../assets/images/pexels-dominika-gregušová-kn.png";
import { Events, animateScroll } from "react-scroll";
import MainOverview from ".//MainOverview";
import ScrollTop from "../../components/common/ScrollTop";
import FirstContent from "../../components/common/FirstContent";

const Overview = () => {
  const [scroll, setScroll] = useState(0);
  const [isScroll, setIsScorll] = useState(true);
  const timeDuration = 1200;
  let wheelOpt = supportsPassive ? { passive: false } : false;
  let wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  const preventDefault = (e) => {
    e.preventDefault();
  };
  const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  var supportsPassive = false;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    var bodyRect = document.body.getBoundingClientRect();
    setScroll(parseInt(-bodyRect.top / window.innerHeight));
    window.addEventListener("DOMMouseScroll", preventDefault, {
      capture: false,
      passive: false,
    }); // older FF
    window.addEventListener(wheelEvent, preventDefault, {
      capture: wheelOpt,
      passive: wheelOpt,
    }); // modern desktop
    window.addEventListener("touchmove", preventDefault, {
      capture: wheelOpt,
      passive: wheelOpt,
    }); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, {
      capture: false,
      passive: false,
    });
    return () => {
      window.removeEventListener("DOMMouseScroll", preventDefault, {
        capture: false,
        passive: false,
      }); // older FF
      window.removeEventListener(wheelEvent, preventDefault, {
        capture: wheelOpt,
        passive: wheelOpt,
      }); // modern desktop
      window.removeEventListener("touchmove", preventDefault, {
        capture: wheelOpt,
        passive: wheelOpt,
      }); // mobile
      window.removeEventListener("keydown", preventDefaultForScrollKeys, {
        capture: false,
        passive: false,
      });
    };
  }, []);

  const displayBtnToTop = (page) => {
    const btnToTopElm = document.querySelector(".top-arrow");
    if (page == 0 && btnToTopElm) {
      btnToTopElm.style.transform = "scale(0)";
      return;
    }
    if (page > 0 && btnToTopElm) {
      btnToTopElm.style.transform = "scale(1)";
      return;
    }
    return;
  };

  const mouseDown = (e) => {
    const h = window.innerHeight;
    if (isScroll) {
      setIsScorll(false);
      if (e.deltaY < 0) {
        if (scroll !== 0) {
          setScroll(scroll - 1);
          displayBtnToTop(scroll - 1);
          animateScroll.scrollTo(h * (scroll - 1), {
            duration: timeDuration,
            smooth: true,
            delay: 0,
          });
          [0, 1, 2, 3, 4].map((item) => {
            if (parseInt(scroll - 1) === item) {
              const element = document.getElementById(`target-${item}`);
              const img = document.getElementById(`img-target-${item}`);
              if (img) {
                img.style.animationName = `mainText1`;
                img.style.animationDuration = "3s";
              }
              element.style.animationName = `mainText1`;
              element.style.animationDuration = "3s";
            } else {
              const element = document.getElementById(`target-${scroll}`);
              const img = document.getElementById(`img-target-${item}`);
              if (img) {
                img.style.animationName = "mainText2";
              }
              element.style.animationName = "mainText2";
            }
          });
        }
        setTimeout(() => {
          setIsScorll(true);
        }, timeDuration);
      } else if (e.deltaY > 0) {
        if (scroll !== 4) {
          setScroll(scroll + 1);
          displayBtnToTop(scroll + 1);
          [0, 1, 2, 3, 4].map((item) => {
            if (parseInt(scroll + 1) === item) {
              const element = document.getElementById(`target-${item}`);
              const img = document.getElementById(`img-target-${item}`);
              if (img) {
                img.style.animationName = `mainText1`;
                img.style.animationDuration = "3s";
              }
              element.style.animationName = `mainText1`;
              element.style.animationDuration = "3s";
            } else {
              const element = document.getElementById(`target-${scroll}`);
              const img = document.getElementById(`img-target-${item}`);
              if (img) {
                img.style.animationName = "mainText2";
              }
              element.style.animationName = "mainText2";
            }
          });
          animateScroll.scrollTo(h * (scroll + 1), {
            duration: timeDuration,
            smooth: true,
            delay: 0,
          });
        }
        setTimeout(() => {
          setIsScorll(true);
        }, timeDuration);
      }
    }
  };

  const scrollTop = () => {
    if (isScroll) {
      setIsScorll(false);
      setScroll(0);
      displayBtnToTop(0);
      animateScroll.scrollTo(0, {
        duration: timeDuration,
        smooth: true,
        delay: 0,
      });
    }

    setTimeout(() => {
      setIsScorll(true);
    }, timeDuration);
  };

  useEffect(() => {
    //restart to top
    if (isScroll) {
      setIsScorll(false);
      setScroll(0);
      displayBtnToTop(0);
      animateScroll.scrollTo(0, {
        duration: 0,
        smooth: true,
        delay: 0,
      });
    }
    setTimeout(() => {
      setIsScorll(true);
    }, timeDuration);
  }, []);
  const mockData = {
    header: {
      bg: bg,
      title: "suites now available at 123 Portland KN",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud KhanhNoi exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      button: "REgister now",
    },
    main: [
      {
        id: 0,
        title: "Discover our suites",
        text:
          "Every suite is outfitted with unparalleled quality and attention to detail. Stainless steel Miele appliances compliment quartz countertops and tile backsplashes in the kitchen, While hardwood floors give way to French doors in the living space. Each master bedroom will also feature French doors, allowing natural light to offer stunning views of the city landscape below.",
        button: "View Floorplans",
        link: "/floorplans",
        bg: bg1,
        img: [design, design2, bg4, bg3],
        order: 0,
      },
      {
        id: 1,
        title: "A MOSAIC OF INFLUENCES",
        text:
          "Every suite is outfitted with unparalleled quality and attention to detail. Stainless steel Miele appliances compliment quartz countertops and tile backsplashes in the kitchen, While hardwood floors give way to French doors in the living space. Each master bedroom will also feature French doors, allowing natural light to offer stunning views of the city landscape below.",
        button: "View Floorplans",
        link: "/floorplans",
        bg: bg2,
        order: 1,
      },
      {
        id: 2,
        title: "Discover our suites",
        text:
          "Every suite is outfitted with unparalleled quality and attention to detail. Stainless steel Miele appliances compliment quartz countertops and tile backsplashes in the kitchen, While hardwood floors give way to French doors in the living space. Each master bedroom will also feature French doors, allowing natural light to offer stunning views of the city landscape below.",
        button: "View Amenities",
        link: "/amenitiess",
        bg: bg3,
        order: 0,
      },
      {
        id: 3,
        title: "PLACE FINDING",
        text:
          "Every suite is outfitted with unparalleled quality and attention to detail. Stainless steel Miele appliances compliment quartz countertops and tile backsplashes in the kitchen, While hardwood floors give way to French doors in the living space. Each master bedroom will also feature French doors, allowing natural light to offer stunning views of the city landscape below.",
        button: "View Location",
        link: "/location",
        bg: bg4,
        order: 1,
      },
    ],
  };

  return (
    <>
      <FirstContent
        bg={bg}
        box={true}
        id={`target-${0}`}
        onWheel={mouseDown}
        scrollTop={scrollTop}
        title="suites now available at 123 Portland KN"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
       do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud KhanhNoi exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat."
        button="REgister now"
        type="card"
      />
      {mockData &&
        mockData.main &&
        mockData.main.map((item, index) => (
          <MainOverview
            bg={item.bg}
            img={item.img}
            order={item.order}
            id={`target-${index + 1}`}
            title={item.title}
            text={item.text}
            button={item.button}
            onWheel={mouseDown}
            link={item.link}
          />
        ))}

      <ScrollTop scrollTop={scrollTop} />
    </>
  );
};

export default Overview;
