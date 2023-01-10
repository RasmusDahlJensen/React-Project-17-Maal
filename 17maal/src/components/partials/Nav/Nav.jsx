import styles from "./nav.module.scss";

const navArr = ["VERDENSMÅLENE", "DELMÅLENE", "UDFORDRINGERNE", "KONTAKT"];

export const Nav = () => {
	return (
		<nav>
			<ul className={styles.flex}>
				{navArr.map((nav, key) => {
					return (
						<li key={key}>
							<a href={"/" + nav}>{nav}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
