import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../assets/images/icons/mail.svg'
import user from '../assets/images/icons/user.svg'
import phone from '../assets/images/icons/phone.svg'
import key from '../assets/images/icons/key.svg'

export default function Register() {
	return (
		<>
			<div className="register-form">
				<div className="form-body">
					<h1 className="title">REGISTER</h1>
					<p className="title description">
						Please enter your email and password to access the VIP members portal.
					</p>
					<form>
						<div className="form-group">
							<input
								type="text"
								placeholder="Name"
								className="form-control form-input form-input-name"
								style={{backgroundImage: `url(${user})`}}
							/>
						</div>
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
								type="text"
								placeholder="Phone"
								className="form-control form-input form-input-phone"
								style={{backgroundImage: `url(${phone})`}}
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
									<input type="checkbox" id="remember2" />
									<label htmlFor="remember2">Remember Me</label>
								</div>
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
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
