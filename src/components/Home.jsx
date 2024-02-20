import { useState } from 'react';
import './Home.css';
import data from '../data/data.json';
import MovieCard from './MovieCard';

function Home() {
	const [movies, setMovies] = useState(data);

	return (
		<>
			{/* Trending Section */}
			<section className="trending">
				{movies.map(
					(movie, index) =>
						movie.isTrending && (
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
			</section>

			{/* Recommended Section */}
			{/* Display movies */}
			<section className="recommended">
				{movies.map(
					(movie, index) =>
						!movie.isTrending && (
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
			</section>
		</>
	);
}

export default Home;
