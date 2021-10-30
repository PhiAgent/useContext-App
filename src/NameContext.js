import React, { useContext, useState } from 'react'


const NameContext = React.createContext()

export function NameProvider({ children }) {
    const [name, setName] = useState('Miguel')

    // function setNewName() {
    //     setName('SUPERMAN')
    // }

    return (
        <NameContext.Provider value={name}>
            {children}
        </NameContext.Provider>
    )
}