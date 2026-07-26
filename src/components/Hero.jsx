import React from 'react'
import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"
const Hero = () => {
  return (
    <div className="hero">
        <img src={Image1} alt="A boy drive cycle" width="500px"/>
        <img src={Image2} alt="A man drive tramp" width="500px"/>
        <img src={Image3} alt="A man doing painting" width="500px"/>
    </div>
  )
}

export default Hero