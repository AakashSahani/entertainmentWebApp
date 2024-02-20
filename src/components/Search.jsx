import { useState } from 'react';
import searchIcon from '../assets/icon-search.svg';
import data from '../data/data.json';

function Search() {
	const [movie, setMovie] = useState(data);

	const handleSearch = (formData) => {
		const query = formData.get('search');
		alert(`You search for ${query}`);
	};

	return (
		<>
			<form action={handleSearch}>
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
