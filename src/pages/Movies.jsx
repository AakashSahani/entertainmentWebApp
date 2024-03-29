import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import data from '../data/data.json';
import Header from '../components/Header';
import Search from '../components/Search';

function Movies() {
	const [movie, setMovie] = useState(data);
	return (
		<>
			<Header />
			<Search />
			<h1>Movies</h1>
			<div>
				{movie.map(
					(movie, index) =>
						movie.category === 'Movie' && (
							<MovieCard
								title={movie.title}
								rating={movie.rating}
								year={movie.year}
								category={movie.category}
								bgImage={movie.thumbnail.regular.large}
								key={index}
							/>
						)
				)}
			</div>
		</>
	);
}

export default Movies;
