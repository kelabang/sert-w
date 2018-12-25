import FileSaver from 'file-saver';

function downloadImage (image) {
	FileSaver.saveAs(image, "sertifikat_"+Date.now()+".jpg");
}

function CardError ({error, judul}) {
	const {
		code,
		type
	} = error;
	return (
		<div className="w-full lg:w-1/2 p-3">
			<div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-md">
				<div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="text-black font-medium text-xl mb-2 leading-loose">{code + ':' + type}</div>
					<p className="text-grey-darker text-base">{`Hmm.. data (${judul}) ini lagi masalah, bentar di cek dulu ya`}</p>
				</div>
			</div>
		</div>
	);
}

export default function Card ({title, judul, link, error}) {
	if (error) 
		return (
			<CardError judul={judul} error={error} />
		);
	return (
		<div className="w-full lg:w-1/2 p-3">
			<div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-md">
				<img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={link} />
				<div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="text-black font-medium text-xl mb-2 leading-loose truncate">{judul}</div>
					<p style={{fontSize: '.85rem'}} className="text-grey-darker text-base truncate">{title}</p>
					<button style={{
						paddingBottom: '2px',
						paddingTop: '1px',
						background: '#74cbc9',
						textAlign: 'center',
						color: 'white',
						borderRadius: '4px',
						marginTop: '1px',
					}} onClick={() => downloadImage(link)}>
						Download Image
					</button>
				</div>
			</div>
		</div>
	);
}