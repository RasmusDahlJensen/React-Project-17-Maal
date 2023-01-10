import { Nav } from "../Nav/Nav";
import styles from "./header.module.scss";

export const Header = () => {
	return (
		<header id="Top">
			<div className={styles.headerContent}>
				<div className={styles.headerFlex}>
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
			</div>
		</header>
	);
};
