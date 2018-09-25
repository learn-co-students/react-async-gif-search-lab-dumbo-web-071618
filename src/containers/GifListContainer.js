import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      searchTerm: ''
    }
  }

  handleInputValue = (event) => {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    // componentDidMount(){
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&limit=3&rating=g`)
      .then(resp=> resp.json())
      .then(gifs => this.setState({gifs: gifs.data}))
    // } don't need because it's being fired after an action.
    //Use this lifecycle method if you fetch automatically when page loads
  }

  render(){
    // console.log("GifListContainer", this.state.gifs)
    return(
      <div>
        <GifSearch
          handleSubmit={this.handleSubmit}
          handleInputValue={this.handleInputValue}
          searchTerm={this.state.searchTerm}
        />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer
