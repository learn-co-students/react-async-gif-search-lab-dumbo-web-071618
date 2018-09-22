import React from 'react';

const GifList = (props) => {
	console.log(props.gif)
	return (
		<li>
			<img src={props.gif} alt=""/>
		</li>
	)
}

export default GifList