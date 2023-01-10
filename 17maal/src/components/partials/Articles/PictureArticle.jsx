import styles from "./singleArticle.module.scss";
export const PictureArticle = (props) => {
	return (
		<article className={styles.pictureArticle}>
			<div>
				<h3>{props.title}</h3>
				<p>{props.paragraph1}</p>
				<p>{props.paragraph2}</p>
				<p>{props.paragraph3}</p>
				<p>{props.paragraph4}</p>
			</div>
			<div>
				<figure>
					<img src={props.myImg} alt="goals" />
				</figure>
			</div>
		</article>
	);
};
