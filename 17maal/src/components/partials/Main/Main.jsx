import styles from "./main.module.scss";
import { SingleArticle } from "../Articles/SingleArticle";
import { ArticleNoBtn } from "../Articles/ArticleNoBtn";
import { Gallery } from "../Gallery/Gallery";

export const Main = () => {
	return (
		<main>
			<SingleArticle
				title="De 17 verdensmål"
				paragraph1="På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.
            "
				paragraph2="Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.
            "
			/>
			<div className={styles.articleFlex}>
				<ArticleNoBtn
					title="Verdensmålene forpligter.
                    "
					paragraph1="Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.
                    "
					paragraph2="Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.
                    "
				/>
				<ArticleNoBtn
					title="Verdensmålene gælder alle.
                "
					paragraph1="Målene gælder alle lande - både rige og fattige - dvs. de er universelle.
                "
					paragraph2="Udfordringer som social, økonomisk  marginalisering, stigende ulighed, fødevareusikkerhed,  ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.
                "
					paragraph3="Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.
                "
				/>
			</div>
			<SingleArticle
				title="DELMÅLENE"
				paragraph1="FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.
			"
				paragraph2="Se eksempler på enkelte delmål her:
				"
			/>
			<Gallery />
		</main>
	);
};
