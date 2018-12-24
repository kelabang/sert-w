import ContentLoader from 'react-content-loader';

import Card from './Card';
import Container from './Container';

function CardLoader(props) {
	return (
		<ContentLoader
			height={475}
			width={400}
			speed={2}
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
			{...props}
		>
			<rect x="13.39" y="418" rx="4" ry="4" width="375" height="13" />
			<rect x="14" y="439.93" rx="4" ry="4" width="213" height="13.92" transform="rotate(0.02, 14, 439.93)" />
			<rect x="7" y="6" rx="5" ry="5" width="400" height="400" />
		</ContentLoader>
	);
}

function Cards ({datas, loading}) {
	if(loading) 
		return (
			<Container>
				<CardLoader />
			</Container>
		);
	return (
		<Container>
			{datas.map(data => <Card {...data} />)}
		</Container>
	);
}

Cards.defaultProps = {
	datas: [],
	loading: false
}

export default Cards;