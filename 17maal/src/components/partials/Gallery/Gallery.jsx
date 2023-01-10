const galleryArr = [
	"Goal-No-Poverty.png",
	"Goal-No-Hunger.png",
	"Goal-Good-Health.png",
	"Goal-Good-Education.png",
	"Goal-Gender-Equality.png",
	"Goal-Clean-Water.png",
	"Goal-Clean-Energy.png",
	"Goal-Decent-Work.png",
	"Goal-Industry.png",
	"Goal-Inequalities.png",
	"Goal-Sustainable-Cities.png",
	"Goal-Responsible-Consumption.png",
	"Goal-Climate-Action.png",
	"Goal-Life-Water.png",
	"Goal-Life-Land.png",
	"Goal-Institutions.png",
	"Goal-Partnership.png",
	"Global-Goals.png",
];

export const Gallery = () => {
	return (
		<div>
			{galleryArr.map((value, key) => {
				console.log(value);
				return (
					<figure key={key}>
						<img
							src={require(`../../../assets/img/Goals/${value}`)}
							alt="goals"
						/>
					</figure>
				);
			})}
		</div>
	);
};
