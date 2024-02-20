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
						<button type="button">
							<Link to="/">
								<img src={navHome} alt="Navigate to Home page" />
							</Link>
						</button>
					</li>
					<li>
						<button type="button">
							<Link to="/movies">
								<img src={navMovies} alt="Navigate to Movies page" />
							</Link>
						</button>
					</li>
					<li>
						<button type="button">
							<Link to="/tvseries">
								<img src={navTVseries} alt="Navigate to TV series page" />
							</Link>
						</button>
					</li>
					<li>
						<button type="button">
							<Link to="/bookmarks">
								<img src={navBookmark} alt="Navigate to Bookmark page" />
							</Link>
						</button>
					</li>
				</ul>
			</nav>
			{/* User Profile */}
			<div id="profilePicContainer">
				<button type="submit">
					<Link to="/login">
						<img src={userProfile} alt="User Profile" />
					</Link>
				</button>
			</div>
		</header>
	);
}

export default Header;
