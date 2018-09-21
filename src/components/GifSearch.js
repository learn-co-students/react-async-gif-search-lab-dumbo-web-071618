import React, {Component} from "react"

export default class GifSearch extends Component    {
    constructor(props)  {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    handleChange=(event) =>     {
        this.setState({
            inputValue: event.target.value
        })
    }

    render()    {
        return (
            <div>
                <h4>Enter Search Term:</h4>
                <input placeholder="Search Term"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button onClick={(event) => {this.props.handleSubmission(this.state.inputValue)}}>Submit</button>
            </div>
        )
    }
}
