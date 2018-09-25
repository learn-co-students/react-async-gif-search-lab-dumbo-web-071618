import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

// const URL = 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      gifs: [],
      limit: 3,
      query: ""
    }
  }

  fetchGifs = (event) => {
    event.preventDefault();
    const baseURL = 'http://api.giphy.com/v1/gifs/search?q='
    const API_KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

    console.log(`${baseURL}${this.state.query}${API_KEY}`);

    fetch(`${baseURL}${this.state.query}${API_KEY}`)
    .then(resp => resp.json())
    .then(gifs => {
      this.setState({ gifs: gifs.data})
    })
  }

  handleSearch = (searchTerm) => {
    this.setState((prevState) => {
      return {
        query: searchTerm
      }
    })
  }

  render() {
    console.log(this.state.query);
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} handleSearch={this.handleSearch} query={this.state.query}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
