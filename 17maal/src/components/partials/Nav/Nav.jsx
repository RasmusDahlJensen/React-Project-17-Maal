import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul className={styles.flex}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/About">About</NavLink>
				</li>
				<li>
					<NavLink to="/Products">Products</NavLink>
				</li>
				<li>
					<NavLink to="/Jobs">Jobs</NavLink>
				</li>
				<li>
					<NavLink to="/Contact">Contact us</NavLink>
				</li>
			</ul>
		</nav>
	);
};
