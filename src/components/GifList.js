import React from 'react'
import GifListContainer from '../containers/GifListContainer.js'


const GifList = ({ gifs }) => {
  
  return (
    <ul>
      {gifs.map((gif) => {
        return (
          <li>
            <img src={gif.images.original.url}/>
          </li>
        )
      })}
    </ul>
  )
}

export default GifList
