import styles from "./main.module.scss";
import { SingleArticle } from "../Articles/SingleArticle";
import { ArticleNoBtn } from "../Articles/ArticleNoBtn";
import { Gallery } from "../Gallery/Gallery";
import { PictureArticle } from "../Articles/PictureArticle";

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
			<SingleArticle
				title="UDFORDRINGER"
				paragraph1="Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.
			"
			/>
			<PictureArticle
				title="Vækst vs. bæredygtighed."
				myImg={require(`../../../assets/img/Image-Sustainability.jpg`)}
				paragraph1="En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.
				"
				paragraph2="Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.
				"
				paragraph3="De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.
				"
			/>
			<PictureArticle
				title="Leave no-one behind."
				paragraph1="I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.
			"
				paragraph2="Arbejdet med verdensmålene skal begynde med, at de
			fattigste og mest marginaliserede adresseres først.
			"
				paragraph3="Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.
			"
				paragraph4="Med andre ord: “Leave No-One behind”.
			"
				myImg={require(`../../../assets/img/Image-Leave-No-One.jpg`)}
			/>

			<PictureArticle
				title="Fattigdom og sult."
				paragraph1="Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.
			"
				paragraph2="Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.
			"
				paragraph3="En stor udfordring, men vi er allerede godt på vej.

			"
				myImg={require(`../../../assets/img/Image-Hunger.jpg`)}
			/>
			<SingleArticle
				title="KONTAKT OS"
				paragraph1="Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:
			"
			/>
		</main>
	);
};
