import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import data from '../src/data/data.json';

function App() {
	const [search, setSearch] = useState('');
	const [movieList, setMovieList] = useState(data);
	const [filteredList, setFilteredList] = useState(movieList);

	return (
		<>
			<Header />
			<Search
				movieList={movieList}
				setMovieList={setMovieList}
				filteredList={filteredList}
				setFilteredList={setFilteredList}
				search={search}
				setSearch={setSearch}
			/>
			<Home movieList={movieList} filteredList={filteredList} search={search} />
		</>
	);
}

export default App;
