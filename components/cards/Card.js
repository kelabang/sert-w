import axios from 'axios';

function downloadImage (image) {
	axios({
		url: image,
		method: 'GET',
		responseType: 'blob', // important
	}).then((response) => {
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'cert.jpeg');
		document.body.appendChild(link);
		link.click();
	});
}

function CardError ({error}) {
	const {
		code,
		type
	} = error;
	return (
		<div className="w-full lg:w-1/2 p-3">
			<div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
				<div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="text-black font-medium text-xl mb-2 leading-loose">{code + ':' + type}</div>
'					<p className="text-grey-darker text-base">Hmm.. data ini lagi masalah, bentar di cek dulu ya</p>
'				</div>
			</div>
		</div>
	);
}

export default function Card ({title, judul, link, error}) {
	if (error) 
		return (
			<CardError error={error} />
		);
	return (
		<div className="w-full lg:w-1/2 p-3">
			<div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
				<img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={link} />
				<div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="text-black font-medium text-xl mb-2 leading-loose">{judul}</div>
					<p className="text-grey-darker text-base">{title}</p>
					<div onClick={() => downloadImage(link)}>
						Download Image
					</div>
				</div>
			</div>
		</div>
	);
}