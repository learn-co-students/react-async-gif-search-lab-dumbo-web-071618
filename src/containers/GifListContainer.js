import React,{Component} from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            gifList: [],
            query: "funny",
            url: "http://api.giphy.com/v1/gifs/search?q=",
            key: "&api_key=dc6zaTOxFJmzC&rating=r"
        }
    }

    componentDidUpdate() {
        fetch(this.state.url+this.state.query+this.state.key)
        .then(res => res.json())
        .then(json => this.setState({
            gifList: [json.data[0].images.original.url, json.data[1].images.original.url, json.data[2].images.original.url]
        }))
    }

    handleSubmission= (query) => {
        console.log(query)
        this.setState({
            query: query
        })
    }

    render()    {
        return (
            <React.Fragment>
                <GifSearch handleSubmission={this.handleSubmission}/>
                <GifList list={this.state.gifList}/>
            </React.Fragment>
        )
    }

}