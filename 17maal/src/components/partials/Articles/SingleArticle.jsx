import styles from "./singleArticle.module.scss";
import { Button } from "../BackToTop/BackToTop";

export const SingleArticle = (props) => {
	return (
		<article>
			<div className={styles.titleandbtn}>
				<h3>{props.title}</h3>
				<Button />
			</div>
			<p>{props.paragraph1}</p>
			<p>{props.paragraph2}</p>
			<p>{props.paragraph3}</p>
			<p>{props.paragraph4}</p>
		</article>
	);
};
