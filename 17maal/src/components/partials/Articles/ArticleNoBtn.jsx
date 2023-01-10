import styles from "./singleArticle.module.scss";

export const ArticleNoBtn = (props) => {
	return (
		<article>
			<div className={styles.titleandbtn}>
				<h3>{props.title}</h3>
			</div>
			<p>{props.paragraph1}</p>
			<p>{props.paragraph2}</p>
			<p>{props.paragraph3}</p>
			<p>{props.paragraph4}</p>
		</article>
	);
};
