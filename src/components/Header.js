import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Header.css';
function Header(props) {
	return (
		<div className="header">
			<div className="header__options">
				<Link to="">
					<div className="header__option">
						<h3>Home</h3>
					</div>
				</Link>

				<Link to="/dashboard">
					<div className="header__option">
						<h3>Dashboard</h3>
					</div>
				</Link>

				<Link to="/management">
					<div className="header__option">
						<h3>Management</h3>
					</div>
				</Link>

				<Link to="/issues">
					<div className="header__option">
						<h3>Issues</h3>
					</div>
				</Link>

				<Link to="/links">
					<div className="header__option">
						<h3>Links</h3>
					</div>
				</Link>
			</div>
			<div>{props.children}</div>
		</div>
	);
}

export default Header;
