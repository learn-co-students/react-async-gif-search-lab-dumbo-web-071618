import React, {Component} from 'react'

class GifList extends Component {
  constructor() {
    super()
  }
  render(){
    // console.log("GifList", this.props.gifs)
    let singleGif = this.props.gifs.map(gif => <li><img src={gif.images.original.url}/></li>)
    return(
      <ul>
        {singleGif}
      </ul>
    )
  }
}

export default GifList
