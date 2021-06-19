import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import Header from "../../components/common/Header";
import bgteam from "../../assets/images/bg1.png";
import FirstContent from "../../components/common/FirstContent";

import FormContact from "./FormContact";

const Contact = () => {
  const [scroll, setScroll] = useState(0);
  const [isScroll, setIsScorll] = useState(true);
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

  const mouseDown = (e) => {
    const h = window.innerHeight;
    if (isScroll) {
      setIsScorll(false);
      if (e.deltaY < 0) {
        if (scroll !== 0) {
          setScroll(scroll - 1);
          animateScroll.scrollTo(h * (scroll - 1), {
            duration: 1500,
            smooth: true,
            delay: 0,
          });
          [0, 1].map((item) => {
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
        }, 1500);
      } else if (e.deltaY > 0) {
        if (scroll !== 1) {
          setScroll(scroll + 1);
          [0, 1].map((item) => {
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
            duration: 1500,
            smooth: true,
            delay: 0,
          });
        }
        setTimeout(() => {
          setIsScorll(true);
        }, 1500);
      }
    }
  };

  const scrollTop = () => {
    if (isScroll) {
      setIsScorll(false);
      setScroll(0);
      animateScroll.scrollTo(0, {
        duration: 1500,
        smooth: true,
        delay: 0,
      });
    }
    setTimeout(() => {
      setIsScorll(true);
    }, 1500);
  };
  return (
    <>
      <FirstContent
        bg={bgteam}
        id={`target-${0}`}
        onWheel={mouseDown}
        scrollTop={scrollTop}
        title="Thank you for your interest in 11 Hoyt. Please register below for more information."
        type="text"
      />

      <section onWheel={mouseDown}>
        <div className="container-fluid p-0">
          <div className="contact">
            <div className="footer-contact"></div>
            <div className="form-main " id={`target-${1}`}>
              <FormContact
                address="312 Atlantic Ave, Brooklyn, NY"
                phone="7188586408"
                email="Info@11hoytbrooklyn.com"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
