import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component{
    state={ 
        gifs: [],
        query: "YOUR QUERY HERE"
        }

    componentDidMount(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({gifs: gifs.data.slice(0,3).map(gif=> gif.images.original.url)})
        })
    }
    
    handleOnSubmit= (event) =>{
        event.preventDefault()
        event.persist()
        this.setState({query: event.target[0].value},()=> console.log(this.state.query,"this is query"))
    }

    componentDidUpdate(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({gifs: gifs.data.slice(0,3).map(gif=> gif.images.original.url)})
        })
    }

    render(){
    return(
        <div> 
            <GifList gifs={this.state.gifs}/>
            <GifSearch handleSubmit={(event)=>this.handleOnSubmit(event)} />
        </div>
        )
    }

}