import React from 'react'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifID: "",
      gifs: []
    }
  }
  handleChange= (event) =>{
    let gif = event.target.value
    this.setState({gifID: gif})
  }



  handleFetch = (event) => {
    event.preventDefault()
  let searchValue = "http://api.giphy.com/v1/gifs/search?q=" + this.state.gifID + "&api_key=dc6zaTOxFJmzC&rating=g"
  fetch(searchValue)
    .then(res => res.json())
    .then(gifs => {
      console.log(gifs);
      this.setState({gifs: gifs.data})
    })
  }

  render(){
    return(
      <div>
        <GifSearch handleChange={this.handleChange} handleFetch={this.handleFetch}
          gifID={this.state.gifID} />
        {this.state.gifs.map(gif =>{
          return <img src={gif.images.original.url} alt=""/>
        })}
      </div>
    )

  }
}
