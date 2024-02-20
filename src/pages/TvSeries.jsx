import { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import MovieCard from '../components/MovieCard';
import data from '../data/data.json';

function TvSeries() {
	const [movie, setMovie] = useState(data);
	return (
		<>
			<Header />
			<Search />
			<div>
				{movie.map(
					(movie, index) =>
						movie.category === 'TV Series' && (
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

export default TvSeries;
