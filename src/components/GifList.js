import React from 'react'

const GifList= (props) => {
    const renderGifLi= () => (
        props.list.map((gif) => (
            <li key={gif}><img src={gif} alt=""></img></li>
        ))
    )

    return (
        <ul>
        {renderGifLi()}
    </ul>
    )
}

export default GifList

