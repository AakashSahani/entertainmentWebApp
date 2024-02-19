import './index.css';
import React from 'react';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp.jsx';
import Movies from './pages/Movies.jsx';
import NotFound from './pages/NotFound.jsx';
import TvSeries from './pages/TvSeries.jsx';
import Bookmarked from './pages/Bookmarked.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/movies',
		element: <Movies />,
	},
	{
		path: '/TV_Series',
		element: <TvSeries />,
	},
	{
		path: '/bookmarks',
		element: <Bookmarked />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
