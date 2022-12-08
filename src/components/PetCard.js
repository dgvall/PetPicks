import React, {useState} from "react"
import "./PetCard.css"

function PetCard({name, image, type, handlePetClick, id, likes}) {
  const [updatedLikes, setUpdatedLikes] = useState(likes)
  
  return (
    <div className = "card"
    >
      <img id = "petImage"
       onClick = {(e) => {
        if(!e.target.className) {
          e.target.parentNode.className = "card-clicked"
          console.log(e.target.parentNode.children[1].className = "petName-clicked")
        }
        setUpdatedLikes(() => likes + 1)
        if (handlePetClick) {
          handlePetClick(id, updatedLikes)
        }
      }
      }
      src = {image}
      onError = {(e) => {
        e.target.onerror = null;
        e.target.src = "https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-5718896-4777467.png"
      }}
      />
      <p className = "petName" > {name}</p>
    </div>
  )
}

export default PetCard