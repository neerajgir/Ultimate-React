import React, { useContext } from 'react'
import { data } from './context/UserContext';
import Card from '../Card';

const App = () => {
  let name = useContext(data)
  return (
    <div>
      <h1>Hey Im {name}</h1>
      <Card/>
    </div>
  )
}

export default App