import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GiftListContainer extends Component {

  constructor(){
    super();
    this.state = {
      images: []
    }
  }

  componentDidMount(queryPath) {
    this.handleSubmit()
  }

  handleSubmit = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(r =>
      this.setState({
      images: [
              r.data[0].images.original.url,
              r.data[1].images.original.url,
              r.data[2].images.original.url
              ]
      })
    )
  }

  render() {
    return(
      <div>
        <GifSearch
          handleSubmit=
          {this.handleSubmit}
        />
        <GifList threeImages={this.state}/>
      </div>
    )
  }

}
