import './Header.css';
import logo from '../assets/logo.svg';
import userProfile from '../assets/image-avatar.png';
import navHome from '../assets/icon-nav-home.svg';
import navMovies from '../assets/icon-nav-movies.svg';
import navTVseries from '../assets/icon-nav-tv-series.svg';
import navBookmark from '../assets/icon-nav-bookmark.svg';

function Header() {
	return (
		<header>
			{/* Logo */}
			<div id="logoContainer">
				<img src={logo} alt="Entertainment App Logo" />
			</div>
			{/* Navigation */}
			<nav>
				<ul>
					<li>
						<button type="button">
							<img src={navHome} alt="Navigate to Home page" />
						</button>
					</li>
					<li>
						<button type="button">
							<img src={navMovies} alt="Navigate to Movies page" />
						</button>
					</li>
					<li>
						<button type="button">
							<img src={navTVseries} alt="Navigate to TV series page" />
						</button>
					</li>
					<li>
						<button type="button">
							<img src={navBookmark} alt="Navigate to Bookmark page" />
						</button>
					</li>
				</ul>
			</nav>
			{/* User Profile */}
			<div id="profilePicContainer">
				<button type="submit">
					<img src={userProfile} alt="User Profile" />
				</button>
			</div>
		</header>
	);
}

export default Header;
