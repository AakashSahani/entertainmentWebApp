import './Movie.css';
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import PropTypes from 'prop-types';
function MovieCard({ bgImage, year, category, rating, title }) {
	return (
		<div className="movieCard">
			<div className="img-container">
				<img src={bgImage} alt={title} />
			</div>
			<div className="text-container">
				<div className="bookmarkBtn">
					<button>
						<img src={bookmarkEmpty} alt="Bookmark button" />
					</button>
				</div>
				<div className="text-content">
					<span>{year}</span>
					<span>{category}</span>
					<span>{rating}</span>
					<strong>{title}</strong>
				</div>
			</div>
		</div>
	);
}

MovieCard.defaultProps = {
	bgImage: 'unknown',
	title: 'Unknown',
	rating: 'null',
	year: 'null',
	category: 'null',
};

MovieCard.propsTypes = {
	bgImage: PropTypes.string,
	year: PropTypes.string,
	category: PropTypes.string,
	rating: PropTypes.string,
	title: PropTypes.string,
};

export default MovieCard;
