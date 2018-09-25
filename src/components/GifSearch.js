import React from 'react'
import GifListContainer from '../containers/GifListContainer'

function GifSearch(props){
  return (
    <form onSubmit={props.handleFetch}>
      <input onChange={props.handleChange}  value={props.gifID}type="text" placeholder="Search" />
    </form>
  )
}

export default GifSearch
