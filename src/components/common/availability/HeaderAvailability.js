import React from "react";
import { useHistory } from "react-router-dom";

import menu1 from "../../../assets/images/menu.svg";
import menu2 from "../../../assets/images/menu2.svg";

const HeaderAvailability = (props) => {
  const { title } = props;
  const history = useHistory();
  const handleToCompare = () => {
    history.push("/compare");
  };

  return (
    <>
      <section className="header-availability">
        <div className="container">
          <div className="row">
            <div className="header-availability-title">
              <h3>{title}</h3>
            </div>
            <div className="header-availability-right ml-xl-auto">
              <button onClick={handleToCompare}>COMPARE</button>
              <div className="header-availability-menu">
                <img
                  src={menu1}
                  alt="menu 1"
                  onClick={() => props.handleSetMenu(2)}
                />
                <img
                  src={menu2}
                  alt="menu 2"
                  onClick={() => props.handleSetMenu(1)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderAvailability;
