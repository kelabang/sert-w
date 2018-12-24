export default function Block ({title, description}) {
	return (
		<section className="font-sans text-center my-8 px-8">
			<h1 className="capitalize font-medium">{title}</h1>
			<p className="text-grey-dark mt-2 mb-6">{description}</p>
		</section>
	);
}

Block.defaultProps = {
	title: 'Ready to get started?',
	description: 'But I must explain to you how all this mistaken idea of denouncing'
};