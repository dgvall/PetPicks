import React, {useState} from "react"
import "./PetCard.css"

function PetCard({name, image, type, handlePetClick, id, likes}) {
  const [updatedLikes, setUpdatedLikes] = useState(likes)

  
  return (
    <div className = "card"
    onClick = {() => {
      setUpdatedLikes(() => likes + 1)
      handlePetClick(id, updatedLikes)
    }
    }
    >
      <img className = "image" src = {image} />
      <p className = "name" > {name}</p>
    </div>
  )
}

export default PetCard