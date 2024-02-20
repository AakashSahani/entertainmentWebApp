import './Header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import navHome from '../assets/icon-nav-home.svg';
import userProfile from '../assets/image-avatar.png';
import navMovies from '../assets/icon-nav-movies.svg';
import navBookmark from '../assets/icon-nav-bookmark.svg';
import navTVseries from '../assets/icon-nav-tv-series.svg';

function Header() {
	return (
		<header>
			{/* Logo */}
			<div id="logoContainer">
				<Link to="/">
					<img src={logo} alt="Entertainment App Logo" />
				</Link>
			</div>
			{/* Navigation */}
			<nav>
				<ul>
					<li>
						<Link to="/">
							<button type="button">
								<img src={navHome} alt="Navigate to Home page" />
							</button>
						</Link>
					</li>
					<li>
						<Link to="/movies">
							<button type="button">
								<img src={navMovies} alt="Navigate to Movies page" />
							</button>
						</Link>
					</li>
					<li>
						<Link to="/tvseries">
							<button type="button">
								<img src={navTVseries} alt="Navigate to TV series page" />
							</button>
						</Link>
					</li>
					<li>
						<Link to="/bookmarks">
							<button type="button">
								<img src={navBookmark} alt="Navigate to Bookmark page" />
							</button>
						</Link>
					</li>
				</ul>
			</nav>
			{/* User Profile */}
			<div id="profilePicContainer">
				<Link to="/login">
					<button type="submit">
						<img src={userProfile} alt="User Profile" />
					</button>
				</Link>
			</div>
		</header>
	);
}

export default Header;
