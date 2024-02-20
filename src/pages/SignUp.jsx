import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function SignUp() {
	return (
		<>
			<header>
				<div>
					<Link to="/">
						<img src={logo} alt="Entertainment Logo" />
					</Link>
				</div>
				<form>
					<h1>Sign Up</h1>
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
					<div>
						<label htmlFor="password">Repeat Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Repeat Password"
						/>
					</div>
					<input type="submit" value="Create an account" />
					<div>
						<span>
							Already have an account?{' '}
							<Link to="/login">
								<span>Login</span>
							</Link>
						</span>
					</div>
				</form>
			</header>
		</>
	);
}

export default SignUp;
