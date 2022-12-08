import React from "react"
import PetCard from "./PetCard"
import "./Game.css"

function Game ({pets, handlePetClick}) {
  // function checkForTwoPets() {
  //   if (pets[1] === undefined) {
  //     console.log("hello")
  //   } 
  // }
  return (
    <div>
      <h1 id = "gameHeader">Pick a Pet!</h1>
      <div id = "card-container">
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
    </div>
  )
}

export default Game