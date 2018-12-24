export default function Container ({children}) {
	return <section className="bg-white py-4 font-sans">
		<div className="container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
			{children}
		</div>
	</section>
}