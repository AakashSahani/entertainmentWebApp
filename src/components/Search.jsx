import { useState } from 'react';
import searchIcon from '../assets/icon-search.svg';
import data from '../data/data.json';

function Search() {
	const [movie, setMovie] = useState(data);

	const handleSearch = (e) => {
		e.preventDefault();
		const search = e.currentTarget.value;
		alert(search);
	};

	return (
		<>
			<form onSubmit={(e) => handleSearch(e)}>
				<label htmlFor="searchBar">Search for movies or TV series</label>
				<input
					name="search"
					type="text"
					id="searchBar"
					placeholder="Search for movies or TV series"
				/>
				<button type="submit">
					<img src={searchIcon} alt="Submit Button For Search" />
				</button>
			</form>
		</>
	);
}

export default Search;
