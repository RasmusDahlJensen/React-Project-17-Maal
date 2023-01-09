import { Nav } from "../Nav/Nav";

export const Header = () => {
	return (
		<header>
			<div>
				<figure>
					<img
						src={require("../../../assets/img/ColorWheel.png")}
						alt="Site logo"
					/>
				</figure>
				<div>
					<h1>THE GLOBAL GOALS</h1>
					<h2>For sustainable Development</h2>
				</div>
			</div>
			<div>
				<Nav />
			</div>
		</header>
	);
};
