import React from 'react'

const GifSearch = props =>
    <form onSubmit={(event)=>props.handleSubmit(event)}>
        <input type="text" />
        <input type="submit"/>
    </form>
export default GifSearch