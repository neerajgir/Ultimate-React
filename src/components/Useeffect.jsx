import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    let [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCount(++count)
        }, 2000);
    },[count])
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Useeffect