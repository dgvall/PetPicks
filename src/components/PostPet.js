import React, {useState} from "react"
import PetCard from "./PetCard"
import "./PostPet.css"

function PostPet () {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  return (
    <div id = "page-container">
      <div id = "form-container">
        <form id = "form">
          <h1>Pet Name</h1>
          <input
          onChange = {(e) => setName(e.target.value)}
          type = "text"
          value = {name}
          />
          <h1>Pet Image</h1>
          <input
          onChange = {(e) => setImage(e.target.value)}
          type = "text"
          value = {image}
          />
          <h1>Pet Type</h1>
          <select>
            <option
            value = "Cat"
            > Cat
            </option>
            <option
            value = "Dog"
            > Dog
            </option >
            <option
            value = "Bird"
            > Bird
            </option >

            <option
            value = "Other"
            > Other
            </option>
          </select>
          <button>Submit</button>
        </form>
      </div>
      <div id = "card-div">
        <h1>PREVIEW</h1>
        <PetCard
        image = {"https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"}
        name = {"Max"}
        type = {"Dog"}
        />
      </div>
    </div>
  )
}

export default PostPet