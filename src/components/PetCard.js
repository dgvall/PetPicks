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
      <img className = "image"
      src = {image}
      onError = {(e) => {
        e.target.onerror = null;
        e.target.src = "https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-5718896-4777467.png"
      }}
      />
      <p className = "name" > {name}</p>
    </div>
  )
}

export default PetCard