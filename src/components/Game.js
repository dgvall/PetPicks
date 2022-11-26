import React from "react"
import PetCard from "./PetCard"
import Vs from "./vs.png"
import "./Game.css"

function Game ({pets}) {
  return (
    <div id = "card-container">
      {/* <img id = "vs" src = {Vs} /> */}
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