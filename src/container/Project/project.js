import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import ScrollTop from "../../components/common/ScrollTop";
import MainProject from "./MainProject";
import ProjectItem from "../../components/common/ProjectItem";
import bg from "../../assets/images/pexels-pixabay-257856.svg";
import bg2 from "../../assets/images/product2.svg";
import bg3 from "../../assets/images/product3.svg";
import p1 from "../../assets/images/p1.svg";
import p2 from "../../assets/images/p2.svg";
import FirstContent from "../../components/common/FirstContent";
import p3 from "../../assets/images/p3.svg";

const Project = () => {
  const [scroll, setScroll] = useState(0);
  const [isScroll, setIsScorll] = useState(true);
  const timeDuration = 1200;
  var supportsPassive = false;

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
  const mainProjectList = [
    {
      background: bg,
      customStrength: 600,
      bigTitle:
        "A soaring and distinctive silhouette destined to become a landmark on the Brooklyn skyline KN",
    },
    {
      background: bg2,
      customStrength: 700,
      bigTitle:
        "A soaring and distinctive silhouette destined to become a landmark on the Brooklyn skyline KN",
    },
    {
      background: bg3,
      customStrength: 800,
      bigTitle:
        "A soaring and distinctive silhouette destined to become a landmark on the Brooklyn skyline KN",
    },
  ];
  const listProject = [
    {
      image: p1,
      title: "Studio Gang",
      desc:
        "Founded bv MacAIThur Fellow and Halyard Professor in Practice Jeanne Gang, Studio Gang is an architecture and urban design practice committed to creating innovative buildings—like Chicago's award-winning Aqua Tower—that enhance public space. Among the firm's current projects are residential towers in Los Angeles, San Francisco, Chicago, Toronto, and Amsterdam, the new United States Embassv in Brazil, and an expansion of the American Museum ofNatun1 Hist01Y in New York City. The studio's work has been widelv honored and exhibited, including at the Venice Architecture Biennale, the Art Institute of Chicago, and the Museum of Modem Art",
    },
    {
      image: p2,
      title: "Michaelis Boyd",
      desc:
        "Founded bv MacAIThur Fellow and Halyard Professor in Practice Jeanne Gang, Studio Gang is an architecture and urban design practice committed to creating innovative buildings—like Chicago's award-winning Aqua Tower—that enhance public space. Among the firm's current projects are residential towers in Los Angeles, San Francisco, Chicago, Toronto, and Amsterdam, the new United States Embassv in Brazil, and an expansion of the American Museum ofNatun1 Hist01Y in New York City. The studio's work has been widelv honored and exhibited, including at the Venice Architecture Biennale, the Art Institute of Chicago, and the Museum of Modem Art",
    },
    {
      image: p3,
      title: "Hollander Design",
      desc:
        "Founded bv MacAIThur Fellow and Halyard Professor in Practice Jeanne Gang, Studio Gang is an architecture and urban design practice committed to creating innovative buildings—like Chicago's award-winning Aqua Tower—that enhance public space. Among the firm's current projects are residential towers in Los Angeles, San Francisco, Chicago, Toronto, and Amsterdam, the new United States Embassv in Brazil, and an expansion of the American Museum ofNatun1 Hist01Y in New York City. The studio's work has been widelv honored and exhibited, including at the Venice Architecture Biennale, the Art Institute of Chicago, and the Museum of Modem Art",
    },
  ];
  return (
    <>
      <ScrollTop scrollTop={scrollTop} />
      <FirstContent
        bg={bg}
        box={true}
        id={`target-${0}`}
        onWheel={mouseDown}
        title="A soaring and distinctive silhouette destined to become a landmark on the Brooklyn skyline KN"
      />
      {mainProjectList &&
        mainProjectList.map((main, index) => (
          <MainProject
            key={index.toString()}
            bg={main.background}
            id={`target-${index + 1}`}
            onWheel={mouseDown}
            customStrength={main.customStrength}
            bigTitle={main.bigTitle}
          />
        ))}
      <section className="section-project-tag" onWheel={mouseDown}>
        <div className="container" id={`target-${4}`}>
          <div className="row">
            {listProject &&
              listProject.map((project, index) => (
                <div
                  key={index.toString()}
                  className="project_column col-lg-4 col-md-12"
                >
                  <ProjectItem
                    image={project.image}
                    title={project.title}
                    text={project.desc}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
