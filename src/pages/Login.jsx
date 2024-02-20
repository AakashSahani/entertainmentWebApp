import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
	return (
		<>
			<header>
				<div>
					<Link to="/">
						<img src={logo} alt="Entertainment Logo" />
					</Link>
				</div>
				<form>
					<h1>Login</h1>
					<div>
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email address"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
						/>
					</div>
					<input type="button" value="Login to your account" />
					<div>
						<span>
							Dont have an account?{' '}
							<Link to="/signup">
								<span>Sign Up</span>
							</Link>
						</span>
					</div>
				</form>
			</header>
		</>
	);
}

export default Login;
