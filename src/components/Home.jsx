import './Home.css';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

function Home({ movieList, filteredList, search }) {
	return (
		<>
			{/* Trending Section */}
			{search.length === 0 && (
				<section className="trending">
					{movieList.map(
						(movie, index) =>
							movie.isTrending && (
								<MovieCard
									title={movie.title}
									rating={movie.rating}
									year={movie.year}
									category={movie.category}
									bgImage={movie.thumbnail.trending.small}
									key={index}
								/>
							)
					)}
				</section>
			)}

			{/* Recommended Section */}
			{/* Display movies */}
			<section className="recommended">
				{filteredList.map(
					(movie, index) =>
						!movie.isTrending && (
							<MovieCard
								title={movie.title}
								rating={movie.rating}
								year={movie.year}
								category={movie.category}
								bgImage={movie.thumbnail.regular.small}
								key={index}
							/>
						)
				)}
			</section>
		</>
	);
}

Home.propTypes = {
	movieList: PropTypes.array,
	filteredList: PropTypes.array,
	search: PropTypes.string,
};
export default Home;
