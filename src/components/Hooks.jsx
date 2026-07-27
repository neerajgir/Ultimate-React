import React, { useState } from 'react'

const Hooks = () => {
    const [color, setColor] = useState("pink");

  return (
    <div>
        <h1>My Favorite color is {color}</h1>
        <button onClick={()=> setColor("Black")}>black</button>
    </div>
  )
}

export default Hooks