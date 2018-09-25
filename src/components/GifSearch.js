import React, { Component } from 'react';

export default class GifSearch extends Component {

	state = {
		term: ""
	}

	handleChange = e => this.setState({term: e.target.value})
	
	render () {
		const {handleSubmit} = this.props
		return (
			<form onSubmit={e => handleSubmit(e, this.state.term)}>
				<input type="text" onChange={this.handleChange} value={this.state.term} />
				<input type="submit" />
			</form>
		);
	}
}