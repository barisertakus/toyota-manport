import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BuildIcon from '@mui/icons-material/Build';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LinkIcon from '@mui/icons-material/Link';
import 'styles/Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__header">
				<h3>TOYOTA - Manufacturing & Quality Systems Portal</h3>
			</div>

			<div className="home__options">
				<Link to="/dashboard">
					<Button>
						<div className="home__option">
							<DesktopWindowsIcon />
							<h3>Monitoring Dashboard</h3>
						</div>
					</Button>
				</Link>

				<Link to="/management">
					<Button>
						<div className="home__option">
							<BuildIcon />
							<h3>Application Management</h3>
						</div>
					</Button>
				</Link>
				<Link to="/issues">
					<Button>
						<div className="home__option">
							<WarningRoundedIcon />
							<h3>Logged Issues</h3>
						</div>
					</Button>
				</Link>
			</div>

			<div className="home__footer">
				<Button>
					<LinkIcon />
					<h3> Quick Links</h3>
				</Button>
			</div>
		</div>
	);
}

export default Home;
