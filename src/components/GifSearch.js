import React, { Component } from 'react'

export default class GifSearch extends Component {

  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  handleInput = event => {
    event.preventDefault()
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <form
        onSubmit={
          (event) => {this.props.handleSubmit(this.state.query)}
        }>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInput}
        />
        <input
          type="submit"
        />
      </form>
    )
  }
}
