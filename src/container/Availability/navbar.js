import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoHeader from "../../assets/images/logo-header.svg";
import nav from "../../assets/images/nav-menu.svg";
const Navbar = (props) => {
    const {
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
            <section className="section-header">
                <div className="logo-header">
                    <img src={logoHeader} />
                </div>
                <div className="container">
                    <div className="row section-header-top">
                        <div className="section-header-top-button col">
                            <button>EN</button>
                        </div>
                        <div className="section-header-top-user  ml-auto ">
                            <div className="section-header-top-user-login d-flex h-100">
                                <span>Login</span>
                            </div>
                            <div className="section-header-top-user-regis">
                                <button>Register</button>
                            </div>
                        </div>
                        <div className="header-nav">
                            <img src={nav} onClick={showNav} />
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
                                        <NavLink to="/explore" activeClassName="list-active-nav">
                                            explore
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/location" activeClassName="list-active-nav">
                                            location
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/amennities" activeClassName="list-active-nav">
                                            amennities
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/floorplans" activeClassName="list-active-nav">
                                            Floorplans
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
                        <div className="section-header-bot-list w-100 ">
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
                                    <NavLink to="/explore" activeClassName="list-active">
                                        explore
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/location" activeClassName="list-active">
                                        location
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/amennities" activeClassName="list-active">
                                        amennities
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="list-right">
                                <li>
                                    <NavLink to="/floorplans" activeClassName="list-active">
                                        Floorplans
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
