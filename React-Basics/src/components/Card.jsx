import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <p>{props.about}</p>
    </div>
  )
}

export default Card