import React, { Component } from 'react';

class GifSearch extends Component {
	constructor() {
		super();
		
		this.state = {
			searchQuery: ''
		}
	}
	
	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({
			searchQuery: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.searchQuery(this.state.searchQuery)
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange}/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default GifSearch;
