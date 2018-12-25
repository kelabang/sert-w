import { debounce } from 'throttle-debounce';

export default function Nav ({onChangeKeyword, keyword, actionSearch}) {
	const handleChangeKeyword = debounce(500, value => {
		onChangeKeyword(value)
		actionSearch()
	})
	return (
		<nav className="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden items-center">
			<div className="flex items-center">
				<a href="/" className="mr-4 w-32" style={{
					textAlign: 'left',
					fontSize: '20px',
					textDecoration: 'none',
					lineHeight: '1',
					color: 'black',
				}}>
					<img style={{width: '30px'}} src={'./../../static/logo.png'} className="rounded-full w-full" alt="logo" />
					nongki
				</a>
				<input 
					onChange={e => {
						const value = e.target.value;
						handleChangeKeyword(value);
					}} 
					type={keyword} 
					placeholder="Search" 
					className="text-sm transition focus:outline-0 border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-1 px-2 pl-10 appearance-none leading-normal ds-input" 
				/>
			</div>
			<ul className="text-sm text-grey-dark list-reset flex items-center">
				<li>
					<a href="#" className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">(not working) Log In</a>
				</li>
				<li>
					<button className="bg-black hover:bg-grey-darker text-white ml-4 py-2 px-3">
						(not working) Sign Up
					</button>
				</li>
			</ul>
		</nav>
	);
}