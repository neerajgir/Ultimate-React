import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(0)
    useEffect(()=>{
        console.log("Hello World")
    },[count1])
  return (
    <div>
        <h1>{count1}</h1>
        <h1>{count2}</h1>
        <button onClick={()=>setCount1(++count1)}>BTN</button>
        <button onClick={()=>setCount2(++count2)}>BTN</button>
    </div>
  )
}

export default Useeffect