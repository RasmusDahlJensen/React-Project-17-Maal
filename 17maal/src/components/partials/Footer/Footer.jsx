import styles from "./footer.module.scss";

export const Footer = () => {
	return (
		<footer>
			<div className={styles.footercontainer}>
				<div className={styles.footertext}>
					<div>
						<h3>Eksterne Links</h3>
						<ul>
							<li>
								<a href="https://www.verdensmaalene.dk/" target="_blank">
									https://www.verdensmaalene.dk/
								</a>
							</li>
							<li>
								<a href="https://www.globalgoals.org" target="_blank">
									https://www.globalgoals.org/
								</a>
							</li>
							<li>
								<a
									href="https://www.un.org/sustainabledevelopment/"
									target="_blank"
								>
									https://www.un.org/sustainabledevelopment/
								</a>
							</li>
							<li>
								<a
									href="https://worldslargestlesson.globalgoals.org/"
									target="_blank"
								>
									https://worldslargestlesson.globalgoals.org/
								</a>
							</li>
							<li>
								<a href="https://www.unenvironment.org/" target="_blank">
									https://www.unenvironment.org/
								</a>
							</li>
							<li>
								<a href="https://ve.dk/klimaberegner/" target="_blank">
									https://ve.dk/klimaberegner/
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3>Ressourcer</h3>
						<ul>
							<li>
								<a
									href="/Assets/Ressources/pdf/Bliver verden bedre_ Final small.pdf"
									target="_blank"
								>
									Bliver Verden Bedre
								</a>
							</li>
							<li>
								<a
									href="/Assets/Ressources/pdf/SPOTLIGHT-Rapport_Enkeltsider.pdf"
									target="_blank"
								>
									Spotlight Rapport
								</a>
							</li>
						</ul>
					</div>
					<figure>
						<img
							src={require("../../../assets/img/Partner-UNDP-Full.png")}
							alt="Site logo"
						/>
					</figure>
				</div>
			</div>
		</footer>
	);
};
