import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<p>Hello World</p>
			{/* 
			<Router>
				<Route path="/login" Component={Login} />
			</Router> */}
		</>
	);
}

export default App;
