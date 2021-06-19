import React, { useEffect } from "react";
import MainAvailability from "../../components/common/availability/MainAvailability";

const Availability = () => {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
  }, []);

  return (
    <>
      <MainAvailability />
    </>
  );
};

export default Availability;
