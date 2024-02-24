import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Search({
	movieList,
	filteredList,
	setFilteredList,
	search,
	setSearch,
}) {
	const filterSearch = () => {
		const newList = movieList.filter((movie) =>
			movie.title.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredList((filteredList) => newList);
	};
	useEffect(() => {
		filterSearch();
	}, [search]);
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					filterSearch();
				}}
			>
				<input
					type="text"
					name="search"
					id="search"
					aria-label="Search bar for movies"
					placeholder="Search for movies or TV series"
					onChange={(e) => setSearch((search) => e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
}

Search.propTypes = {
	movieList: PropTypes.array,
	filteredList: PropTypes.array,
	setFilteredList: PropTypes.func,
	search: PropTypes.string,
	setSearch: PropTypes.func,
};

export default Search;
