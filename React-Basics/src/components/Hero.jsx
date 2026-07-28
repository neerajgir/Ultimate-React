import React from 'react'
import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"
import Card from './Card';
const Hero = () => {
  return (
    <div className="hero">
      <Card name="Boy" about="A boy drive cycle" image={Image1}/>
      <Card name="Driver" about="A man drive tramp" image={Image2}/>
      <Card name="Painter" about="A man doing painting" image={Image3}/>
    </div>
  )
}

export default Hero