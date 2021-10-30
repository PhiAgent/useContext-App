import React, { useContext, useState } from 'react'


const NameContext = React.createContext()
// const NameUpdateContext = React.createContext()

export function useName () {
    return useContext(NameContext)
}

// export function useUpdateName() {
//     return useContext(NameUpdateContext)
// }

export function NameProvider({ children }) {
    const [name, setName] = useState('Miguel')

    function setNewName() {
        setName('SUPERMAN')
    }

    return (
        <NameContext.Provider value={ {name: name, setNewName: setNewName }}>
            {children}
        </NameContext.Provider>
    )
}