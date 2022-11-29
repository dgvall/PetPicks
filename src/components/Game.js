import React from "react"
import PetCard from "./PetCard"
import Vs from "./vs.png"
import "./Game.css"

function Game ({pets, handlePetClick}) {
  return (
    <div id = "card-container">
      {/* <img id = "vs" src = {Vs} /> */}
      {
        pets.map(pet => {
          return  <PetCard
            key = {pet.id}
            name = {pet.name}
            image = {pet.image}
            type = {pet.type}
            id = {pet.id}
            likes = {pet.likes}
            handlePetClick = {handlePetClick}
            />
        }) 
      }
    </div>
  )
}

export default Game