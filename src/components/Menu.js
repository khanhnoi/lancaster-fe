import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import logoHeader from './../assets/images/logo-header.svg';
import nav from './../assets/images/nav-menu.svg';
import topArrow from './../assets/images/top-arrow.svg';
import Login from './Login';
import Register from './Register';
const Menu = props => {
	const { detailFloor, clickMenuFloor, zIndex, history } = props;
	const [menu, setMenu] = useState(false);
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);

	const showNav = () => {
		setMenu(!menu);
		if (menu) {
			document.getElementById('nav-menu').style.marginTop = '-100vh';
			document.querySelector('.header-nav-bg').style.transform = `rotate(90deg)`;
			document.querySelector('.section-header-user').style.opacity = '1';
			document.querySelector('.section-header-user').style.pointerEvents = 'all';
		} else {
			document.getElementById('nav-menu').style.marginTop = '0';
			document.querySelector('.header-nav-bg').style.transform = `rotate(0deg)`;
			document.querySelector('#nav-menu ul').style.display = 'block';
			document.querySelector('.section-header-user').style.opacity = '0.3';
			document.querySelector('.section-header-user').style.pointerEvents = 'none';
		}
	};
	const showLogin = () => {
		if (login) {
			document.querySelector('.login-form').style.transform = `translateX(100%)`;
			document.querySelector('.section-header-bot-list').style.transform = `translateY(0)`;
			document.querySelector('.section-header-user-login-hide p').style.transform = `translateX(100%)`;
			document.querySelector('.section-header-user-login-hide p').style.opacity = `0`;
		} else {
			document.querySelector('.login-form').style.transform = `translateX(0)`;
			document.querySelector('.section-header-bot-list').style.transform = `translateY(-100%)`;
			document.querySelector('.section-header-user-login-hide p').style.transform = `translateX(0)`;
			document.querySelector('.section-header-user-login-hide p').style.opacity = `1`;
			if (register) {
				document.querySelector('.register-form').style.transform = `translateX(100%)`;
				setRegister(!register);
			}
		}
		setLogin(!login);
	};
	const showRegister = () => {
		setRegister(!register);
		if (register) {
			document.querySelector('.register-form').style.transform = `translateX(100%)`;

			document.querySelector('.section-header-bot-list').style.transform = `translateY(0)`;
		} else {
			document.querySelector('.register-form').style.transform = `translateX(0)`;
			document.querySelector('.section-header-bot-list').style.transform = `translateY(-100%)`;
			if (login) {
				document.querySelector('.login-form').style.transform = `translateX(100%)`;
				document.querySelector('.section-header-user-login-hide p').style.transform = `translateX(100%)`;
				document.querySelector('.section-header-user-login-hide p').style.opacity = `0`;
				setLogin(!login);
			}
		}
	};
	const leftMenus = [
		{
			title: 'Overview',
			url: '/overview'
		},
		{
			title: 'project',
			url: '/project'
		},
		{
			title: 'explore',
			url: '/explore'
		},
		{
			title: 'location',
			url: '/location'
		},
		{
			title: 'amenities',
			url: '/amenities'
		}
	];
	const rightMenus = [
		{
			title: 'compare',
			url: '/compare'
		},
		{
			title: 'availability',
			url: '/availability'
		},
		{
			title: 'team',
			url: '/team'
		},
		{
			title: 'contact',
			url: '/contact'
		}
	];
	return (
		<>
			<Login />
			<Register />
			<section className="section-header" style={{ zIndex: zIndex ? zIndex : '' }}>
				<div className="logo-header">
					<img src={logoHeader} alt="Logo" />
				</div>
				<div className="section-header-lang btn-hover-simple-text">
					<p>EN</p>
				</div>
				<div className="section-header-user ">
					<div className="section-header-user-login d-flex " onClick={() => showLogin()}>
						<span className="section-header-user-login-hide">
							<p>{'Hide_'}</p>
						</span>
						<span>
							<p>{'Login'}</p>
						</span>
					</div>
					<div
						className={!register ? 'section-header-user-regis' : 'section-header-user-regis active'}
						onClick={() => showRegister()}
					>
						<span>Register</span>
						<div className="section-header-user-regis-liquid"></div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row section-header-top">
						<div className="header-nav">
							<img src={nav} onClick={showNav} alt="Toggle" />
							<div className="header-nav-bg"></div>
							<div className="header-nav-menu" id="nav-menu">
								<ul>
									{leftMenus &&
										leftMenus.map((menu, index) => (
											<li key={index.toString()}>
												<NavLink
													to={menu.url}
													activeClassName="list-active-nav"
													onClick={showNav}
												>
													{menu.title}
												</NavLink>
											</li>
										))}
									{rightMenus &&
										rightMenus.map((menu, index) => (
											<li key={index.toString()}>
												<NavLink
													to={menu.url}
													activeClassName="list-active-nav"
													onClick={showNav}
												>
													{menu.title}
												</NavLink>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>

					{/* desktop */}
					<div className="row section-header-bot">
						<div className="section-header-bot-list">
							<ul className="list-left">
								{leftMenus &&
									leftMenus.map((menu, index) => (
										<li key={index.toString()}>
											<NavLink to={menu.url} activeClassName="list-active">
												{menu.title}
											</NavLink>
										</li>
									))}
							</ul>

							<ul className="list-right">
								{rightMenus &&
									rightMenus.map((menu, index) => (
										<li key={index.toString()}>
											<NavLink to={menu.url} activeClassName="list-active">
												{menu.title}
											</NavLink>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default withRouter(Menu);
