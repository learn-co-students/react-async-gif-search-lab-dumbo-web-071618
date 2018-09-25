import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer.js'


export default class GifSearch extends Component {

  handleChange = (event) => {
    this.props.handleSearch(event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.props.fetchGifs}>
        <input onChange={this.handleChange} type="text" value={this.props.query}/>
      </form>

    )
  }
}
