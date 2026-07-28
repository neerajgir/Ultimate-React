import React, { useContext } from 'react'
import { data } from './src/context/Story';

const Card = () => {
    let kahani = useContext(data)
  return (
    <div>
        <h1>Name: {kahani.Name}</h1>
        <h2>Author: {kahani.Author}</h2>
        <p>StoryLine: {kahani.Storyline}</p>
    </div>
  )
}

export default Card