import data from '../data/data.json';
import Header from '../components/Header';
import Search from '../components/Search';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Bookmarked() {
	const [movie, setMovie] = useState(data);

	return (
		<>
			<Header />
			<Search />
			<div>
				{movie.map(
					(movie, index) =>
						movie.isBookmarked && (
							<MovieCard
								title={movie.title}
								rating={movie.rating}
								year={movie.year}
								category={movie.category}
								key={index}
							/>
						)
				)}
			</div>
		</>
	);
}

export default Bookmarked;
