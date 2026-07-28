import React, { useState } from 'react'

const Hooks = () => {
    let [count, setCount] = useState(0);

  return (
    <div> 
        <h1>{count}</h1>
        <button onClick={()=> setCount(count++)}>Increment</button>
    </div>
  )
}

export default Hooks