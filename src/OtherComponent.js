import React from 'react'
import { useName } from './NameContext.js'

function OtherComponent() {
    const nameContext = useName()
    return (
        <div>
            <h2>{nameContext.name}</h2>
            <button onClick={nameContext.setNewName}>Click here!</button>
        </div>
    )
}

export default OtherComponent;