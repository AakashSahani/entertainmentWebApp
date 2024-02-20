import './Movie.css';

function MovieCard(props) {
	return (
		<div
			className="movieCard"
			// style={{ background: `${props.thumbnail.regular.medium}` }}
		>
			<p>{props.title}</p>
			<p>{props.rating}</p>
			<p>{props.year}</p>
			<p>{props.category}</p>
		</div>
	);
}

MovieCard.defaultProps = {
	title: 'Unknown',
	rating: 'null',
	year: 'null',
	category: 'null',
};

export default MovieCard;
