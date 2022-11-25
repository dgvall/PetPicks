import React from "react"
import "./PetCard.css"

function PetCard({name, image, type}) {
  return (
    <div className = "card">
      <img className = "image" src = {image} />
      <p className = "name" > {name}</p>
    </div>
  )
}

export default PetCard