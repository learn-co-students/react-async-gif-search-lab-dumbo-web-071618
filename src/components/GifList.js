import React from 'react'


const GifList = props => {
  
    return (
        <ul>
          {props.threeImages.images.map(image =>
            <li>
              <img src={image} alt='' key={image}/>
            </li>
          )}
        </ul>
    )

  }

  export default GifList;
