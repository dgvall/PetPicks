import React, {useState} from "react"
import PetCard from "./PetCard"
import "./PostPet.css"

function PostPet () {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const formData = {
      name: name,
      image: image,
      type: type,
      likes: 0
    }

    fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
  }

  return (
    <div id = "page-container">
      <div id = "form-container">
        <form id = "form"
        onSubmit = {handleSubmit}
        >
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
        image = {image}
        name = {name}
        // type = {type}
        />
      </div>
    </div>
  )
}

export default PostPet