import ContentLoader from 'react-content-loader';
import windowSize from 'react-window-size';

import Card from './Card';
import Container from './Container';

function CardBigLoader (props) {
	return (
		<div className="w-full lg:w-1/2 p-3">
			<div className="flex flex-col rounded overflow-hidden h-auto lg:h-32 ">
				<ContentLoader
					height={128}
					width={472}
					speed={2}
					primaryColor="#f3f3f3"
					secondaryColor="#ecebeb"
					{...props}
				>
					<rect x="209.34" y="28.9" rx="3" ry="3" width="254.6" height="11.01" />
					<rect x="213" y="70" rx="3" ry="3" width="201" height="6.4" />
					<rect x="1.16" y="-0.39" rx="0" ry="0" width="192.56" height="126" />
				</ContentLoader>
			</div>
		</div>
	);
}

function CardLoader() {
	return (
		<div className="w-full lg:w-1/2 p-3">
			<div className="flex flex-col rounded overflow-hidden h-auto lg:h-32 ">
				<ContentLoader
					height={475}
					width={400}
					speed={2}
					primaryColor="#f3f3f3"
					secondaryColor="#ecebeb"
				>
					<rect x="13.39" y="418" rx="4" ry="4" width="375" height="13" />
					<rect x="14" y="439.93" rx="4" ry="4" width="213" height="13.92" transform="rotate(0.02, 14, 439.93)" />
					<rect x="7" y="6" rx="5" ry="5" width="400" height="400" />
				</ContentLoader>
			</div>
		</div>
		
	);
}

function Cards ({datas, loading, windowWidth}) {
	if(loading) 
		return (
			<Container>
				{
					(windowWidth <= 768)?
						<CardLoader />:
						<CardBigLoader />
				}
			</Container>
		);
	return (
		<Container>
			{datas.map(data => !data.error && <Card {...data} />)}
		</Container>
	);
}

Cards.defaultProps = {
	datas: [],
	loading: false
}

const ComposedCards = (process.browser) ? windowSize(Cards): Cards;

export default ComposedCards;