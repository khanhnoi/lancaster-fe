import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoHeader from "../../assets/images/logo-header.svg";
import nav from "../../assets/images/nav-menu.svg";
import topArrow from "../../assets/images/top-arrow.svg";
const Header = (props) => {
  const {
    bg,
    box,
    id,
    onWheel,
    scrollTop,
    title,
    text,
    button,
    bigTitle,
    only,
    detailFloor,
    clickMenuFloor,
    hideScroll,
    zIndex,
  } = props;
  const [menu, setMenu] = useState(true);

  const showNav = () => {
    setMenu(!menu);
    if (menu) {
      document.getElementById("nav-menu").style.marginTop = "0";
      document.querySelector("#nav-menu ul").style.display = "block";
    } else {
      document.getElementById("nav-menu").style.marginTop = "-100vh";
      document.querySelector("#nav-menu ul").style.display = "none";
    }
  };
  return (
    <>
      <section
        className="section-header"
        style={{ zIndex: zIndex ? zIndex : "" }}
      >
        <div className="logo-header">
          <img src={logoHeader} alt="Logo" />
        </div>
        <div className="container">
          <div className="row section-header-top">
            <div className="header-nav">
              <img src={nav} onClick={showNav} alt="Toggle" />
              <div className="header-nav-menu" id="nav-menu">
                <ul>
                  <li>
                    <a>Login</a>
                  </li>
                  <li>
                    <a>Register</a>
                  </li>
                  <li>
                    <NavLink to="/overview" activeClassName="list-active-nav">
                      Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/project" activeClassName="list-active-nav">
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" activeClassName="list-active-nav">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/location" activeClassName="list-active-nav">
                      location
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/amenities" activeClassName="list-active-nav">
                      amenities
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/compare" activeClassName="list-active-nav">
                      compare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/availability"
                      activeClassName="list-active-nav"
                    >
                      availability
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team" activeClassName="list-active-nav">
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName="list-active-nav">
                      contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row section-header-bot">
            <div className="section-header-top-button">
              <button>EN</button>
            </div>
            <div className="section-header-bot-list">
              <ul className="list-left">
                <li>
                  <NavLink to="/overview" activeClassName="list-active">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project" activeClassName="list-active">
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeClassName="list-active">
                    login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/location" activeClassName="list-active">
                    location
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/amenities" activeClassName="list-active">
                    amenities
                  </NavLink>
                </li>
              </ul>
              <ul className="list-right">
                <li>
                  <NavLink to="/compare" activeClassName="list-active">
                    compare
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/availability" activeClassName="list-active">
                    availability
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team" activeClassName="list-active">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="list-active">
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="section-header-top-user ">
              <div className="section-header-top-user-login d-flex ">
                <span>Login</span>
              </div>
              <div className="section-header-top-user-regis">
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
        {hideScroll ? null : (
          <div className="top-arrow" onClick={scrollTop}>
            <img src={topArrow} />
          </div>
        )}
      </section>
      (
      {only ? (
        ""
      ) : (
        <>
          <section
            className={
              bigTitle ? "header-image header-image-big" : "header-image"
            }
            style={{ backgroundImage: `url(${bg})` }}
            onWheel={onWheel}
          >
            <div className="shadow-small"></div>
            {box ? (
              <>
                <div className="container header-image-main">
                  <div className="row header-image-main-row" id={id}>
                    <span className="header-image-main-row-line"></span>
                    <p className="header-image-main-row-title">{title}</p>
                    <p className="header-image-main-row-text">{text}</p>
                    <button className="header-image-main-row-button">
                      {button}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="container header-big-title" id={id}>
                <p>{bigTitle}</p>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Header;
