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
    this.props.handleSubmit(this.state.query)
  }

  render() {
    return (
      <form
        onSubmit={
          this.handleInput
        }>
        <input
          type="text"
          value={this.state.query}
          onChange={event => this.setState({
            query: event.target.value
          })}
        />
        <input
          type="submit"
        />
      </form>
    )
  }
}
