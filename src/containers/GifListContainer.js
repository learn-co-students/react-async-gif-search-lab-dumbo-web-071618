import React, { PureComponent } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends PureComponent {

	constructor() {
		super();
		this.state = {
			url: "https://api.giphy.com/v1/gifs/search?q=",
			query: '',
			api: '&api_key=dc6zaTOxFJmzC&rating=g',
			gifs: []
		}
	}
	
	searchQuery = (q) => {
		this.setState(
			{query: q},
			() => {
				let fullURL = this.state.url + this.state.query + this.state.api
				fetch(fullURL)
				.then(res => res.json())
				.then(results =>{
					let newArr = [results.data[0], results.data[1], results.data[2]].map(gif => {
						return gif.images.original.url
					})
					this.setState({
						gifs: newArr
					},
					() => console.log(this.state))
				})
			}
		)
	}

	renderGifList = () => {
		return this.state.gifs.map( gif => {
			return <GifList gif={gif} />
		})
	}

	render() {
		return (
			<div>
				<GifSearch searchQuery={this.searchQuery} />
				<ul> 
					{this.renderGifList()}
				</ul>
			</div>
		);
	}
}

export default GifListContainer;
