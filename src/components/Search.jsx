import { useState } from 'react';
// import searchIcon from '../assets/icon-search.svg';
// import data from '../data/data.json';

function Search() {
	// const [movie, setMovie] = useState(data);
	const [search, setSearch] = useState('');
	// const handleSearch = (e) => {
	// 	e.preventDefault();
	// 	const search = e.currentTarget.value;
	// 	alert(search);
	// };

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					alert(search);
				}}
			>
				<input
					type="text"
					name="search"
					id="search"
					aria-label="Search bar for movies"
					placeholder="Search for movies or TV series"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
}

export default Search;
