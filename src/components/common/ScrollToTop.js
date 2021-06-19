import React from "react";
import topArrow from "../../assets/images/top-arrow.svg";
import cx from "classnames";

const ScrollToTop = (props) => {
  const { fullpageApi, display } = props;
  const handleMoveTo = (fullpageApi, number = 1) => {
    fullpageApi.moveTo(number);
    const btnElm = document.querySelector("#scrollToTopButton");
    if (btnElm) {
      btnElm.style.pointerEvents = "none";
      setTimeout(() => {
        btnElm.style.pointerEvents = "all";
      }, 900);
    }
  };
  if (fullpageApi)
    return (
      <>
        <div
          id="scrollToTopButton"
          className={cx(
            "top-arrow button-fixed-bottom ",
            display ? "none-to-display" : "top-arrow-hide display-to-none"
          )}
          onClick={() => handleMoveTo(fullpageApi, 1)}
        >
          <img src={topArrow} alt="scroll to top" />
        </div>
      </>
    );
  return null;
};

export default ScrollToTop;
