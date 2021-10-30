// import React, { useContext } from 'react'
// import { NameContext } from './App.js'

function OtherComponent(props) {
    return (
        <div>
            <h2>{props.num}</h2>
            <button onClick={() => props.incrementBy1()}>Click here</button>
        </div>
    )
}

export default OtherComponent;