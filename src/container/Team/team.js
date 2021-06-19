import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import bgteam from "../../assets/images/bg1.png";
import bgteam2 from "../../assets/images/bg2.png";
import bgteam3 from "../../assets/images/bg3.png";
import TeamItem from "./TeamItem";
import FirstContent from "../../components/common/FirstContent";

const Team = () => {
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
        }, 1500);
      } else if (e.deltaY > 0) {
        if (scroll !== 2) {
          setScroll(scroll + 1);
          [0, 1, 2].map((item) => {
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
        title="A soaring and distinctive silhouette destined to become a landmark on the Brooklyn skyline"
      />
      <section id={`target-${1}`} onWheel={mouseDown}>
        <TeamItem
          background={bgteam2}
          title="architectural"
          header="Studio Gang"
          text="Founded bv MacAIThur Fellow and Halyard Professor in Practice Jeanne Gang,
                Studio Gang is an architecture and urban design practice committed to creating
                innovative buildings—like Chicago's award-winning Aqua Tower—that enhance public space.
                Among the firm's current projects are residential towers in Los Angeles, San Francisco,
                Chicago, Toronto, and Amsterdam, the new United States Embassv in Brazil,
                and an expansion of the American Museum ofNatun1 Hist01Y in New York City.
                The studio's work has been widelv honored and exhibited, including at the Venice
            Architecture Biennale, the Art Institute of Chicago, and the Museum of Modem Art"
          textRight={false}
        />
      </section>
      <section id={`target-${2}`} onWheel={mouseDown}>
        <TeamItem
          background={bgteam3}
          id={`target-${2}`}
          onWheel={mouseDown}
          title="Interior design"
          header="Michaelis Boyd"
          text="London-based Michaelis Boyd is an award-winning firm with a reputation for 
          sophisticated architecture and interiors emphasizing sustainable materials and building techniques. 
          The firm's global polffolio encompasses high-end residential and commercial projects, 
          including luxurv hotels, private members' clubs, and chic restaurants and bars.
          Among Michaelis Boyd's well-known works are Sandibe, a sustainable safari lodge in Botswana. 
          Soho House outposts in Berlin, Los Angeles, and the English countryside, London's famed Groucho Club,
          the Williamsburg Hotel in Brooklyn, and residences at the Sugar Beach resort in St Lucia."
          textRight={true}
        />
      </section>
    </>
  );
};
export default Team;
