import { Component } from 'react';
import axios from 'axios';
import Head from 'next/head';
import getConfig from 'next/config';

import Nav from './../components/nav/Nav';
import Cards from './../components/cards/Cards';
import Block from './../components/block/Block';

const { publicRuntimeConfig } = getConfig()

const {
	API = 'http://localhost:3030'
} = publicRuntimeConfig;

class Index extends Component {
	state={
		name: '',
		loading: false,
		data: [],
	}
	searchSertifikat = async () => {
		const { name } = this.state;
		if(!name) 
			return name;

		this.setState(prevState => {
			return { ...prevState, loading: true, data: [] }
		});

		if (typeof this._source != typeof undefined) {
			this._source.cancel('Operation canceled due to new request.')
		}
		// save the new request for cancellation
		this._source = axios.CancelToken.source();

		let req = null;

		try {
			req = await axios(
				`${API}/seeker?name=${name}`,
				{ cancelToken: this._source.token }
			);
		}
		catch (error) {
			if (axios.isCancel(error)) {
				console.log('Request canceled', error);
			} else {
				console.log(error);
			}
		}
		
		let data = null;
		
		if(req) {
			const {
				data: {
					data: arrdata
				}
			} = req;

			if (arrdata && arrdata.length > 0) {
				data = [];
				arrdata.map((item) => {
					const {
						data: _data,
						judul,
					} = item
					if (_data) 
						data.push({judul, ..._data});
				})
			}
		}

		console.log('now data', data)
		
		if(!data)
			return false; 

		this.setState(prevState => {
			return {...prevState, loading: false, data: [...data]}
		});
	}
	changeKeyword = async keyword => {
		this.setState({
			name: keyword
		})
	}
	render () {
		const { title , description } = this.props;

		return (
			<div>
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<title>Index Of Pages</title>
					<link href="/static/main.css" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900" rel="stylesheet" />
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
					
					<script dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5837SPR');`,
					}}>
					</script>

				</Head>

				<Nav 
					onChangeKeyword={this.changeKeyword} 
					keyword={this.state.name}
					actionSearch={this.searchSertifikat}
				/>
				{(this.state.name.length < 1 && this.state.data.length < 1) && <Block title={title} description={description} />}
				<Cards datas={this.state.data} loading={this.state.loading} />
			</div>
		);
	}
}

Index.defaultProps = {
	title: 'Susah download sertifikat ?',
	description: 'Coba ketik nama di kotak search'
}

export default Index;