import React from 'react'


const GifList = props => {

    return (
        <ul>
          {props.threeImages.images.map(image =>
            <li>
              <img  key={image} src={image} alt=''/>
            </li>
          )}
        </ul>
    )

  }

  export default GifList;
