import React from 'react'

const GifList = ({gifs}) => {
	return (
		<ul>
			<li><img src={gifs[0]} /></li>
			<li><img src={gifs[1]} /></li>
			<li><img src={gifs[2]} /></li>
		</ul>
	)
}

export default GifList