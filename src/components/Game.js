import React from "react"
import PetCard from "./PetCard"
import "./Game.css"

function Game ({pets}) {
  return (
    <div id = "card-container">

      {
        pets.map(pet => {
          return  <PetCard
            key = {pet.id}
            name = {pet.name}
            image = {pet.image}
            type = {pet.type}/>
        }) 
      }
    </div>
  )
}

export default Game