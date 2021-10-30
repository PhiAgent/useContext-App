import './App.css';
import React, { useState, useEffect } from 'react'
import OtherComponent from './OtherComponent.js'
// import NameProvider from './NameContext.js'

// export const NameContext = React.createContext()

function App() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('Miguel')
  const [value, setValue] = useState('')

  useEffect(() => {
    incrementBy1()   
  }, [name])

  function incrementBy1() {
    setNum(num + 1)
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => setName(value)}>Click here</button>
      <OtherComponent num={num} incrementBy1={incrementBy1}/>
    </div>
  );
}

export default App;
