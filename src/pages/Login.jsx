import logo from '../assets/logo.svg';

function Login() {
	return (
		<>
			<header>
				<div>
					<img src="" alt="" />
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
							Dont have an account? <a href="#">Sign Up</a>
						</span>
					</div>
				</form>
			</header>
		</>
	);
}

export default Login;
