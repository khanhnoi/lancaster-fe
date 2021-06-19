import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../assets/images/icons/mail.svg'
import key from '../assets/images/icons/key.svg'

export default function Login() {
	return (
		<>
			<div className="login-form">
				<div className="form-body">
					<h1 className="title">LOG IN</h1>
					<p className="title description">
						Please enter your email and password to access the VIP members portal.
					</p>
					<form>
					<div className="form-group">
							<input
								type="text"
								placeholder="Email"
								className="form-control form-input form-input-email"
								style={{backgroundImage: `url(${mail})`}}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								placeholder="Password"
								className="form-control form-input form-input-password"
								style={{backgroundImage: `url(${key})`}}
							/>
						</div>
						<div className="form-group">
							<div className="form-link-block">
								<div className="checkbox-form">
									<input type="checkbox" id="remember" />
									<label htmlFor="remember">Remember Me</label>
								</div>
								<Link to="/" className="link-forgot">
									Forgot Password?
								</Link>
							</div>
						</div>
						<div className="form-button">
							<button
								className="btn btn-custom btn-hover-black-neon"
								style={{ width: `100%` }}
								onClick={e => {
									e.preventDefault();
								}}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
