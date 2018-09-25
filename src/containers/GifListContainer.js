import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

	state = {
		gifs: []
	}

	getGifs(term) {
		return fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
			.then(res => res.json())
			.then(data => {data.data.map(gifObj => gifObj.images.fixed_height_still.url)})
	}
	
	handleSubmit = (e, term) => {
		e.preventDefault()
		this.getGifs(term)
			.then(gifs => this.setState({gifs}))
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<GifSearch handleSubmit={this.handleSubmit}/>
				<GifList gifs={this.state.gifs}/>
			</div>
		);
	}
}