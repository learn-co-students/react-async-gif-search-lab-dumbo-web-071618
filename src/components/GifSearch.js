import React, {Component} from "react"

class GifSearch extends Component {
  constructor() {
    super()
  }

  render(){
    // console.log(this.props);
    return(
      <div>
        <form>
          <input
            onChange={this.props.handleInputValue}
            type="text"
            value={this.props.searchTerm}
          />
          <input
            onClick={this.props.handleSubmit}
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export default GifSearch
