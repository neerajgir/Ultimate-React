import React, { useContext } from 'react'
import { data } from './context/UserContext';

const App = () => {
  let name = useContext(data)
  return (
    <div>
      <h1>Hey Im {name}</h1>
    </div>
  )
}

export default App