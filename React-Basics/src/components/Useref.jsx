import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    let count = useRef(0)
    let [num, setNum] = useState(0)
    useEffect(()=>{
        count.current = count.current + 1
    })
  return (
    <div>
        <h1>{count.current}</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum(++num)}>CLick</button>
    </div>
  )
}

export default Useref