import React from "react"
import "./PetCard.css"

function PetCard({name, image, type, onPetClick, id}) {
  
  return (
    <div className = "card"
    onClick = {onPetClick}
    >
      <img className = "image" src = {image} />
      <p className = "name" > {name}</p>
    </div>
  )
}

export default PetCard