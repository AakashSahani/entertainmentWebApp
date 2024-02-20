import './Movie.css';
// import bgImage from '../assets/thumbnails/112/regular/large.jpg';

function MovieCard(props) {
	return (
		<div
			className="movieCard"
			style={{
				backgroundImage: `url(${props.bgImage})`,
			}}
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
