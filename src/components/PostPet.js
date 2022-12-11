import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import PetCard from "./PetCard"
import "./PostPet.css"

function PostPet({handleUpdatePets}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    if(!(name.length === 0)
      && !(document.getElementById("petImage").src === "https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-5718896-4777467.png")
      && !(type === "")
    ) {
      console.log("passed")
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
      .then(res => res.json())
      .then(data => handleUpdatePets(data))
      history.push(`/submitted`)
    } else {
      console.log("failed, try again")
      alert("Please fill in all of your pet information!")
    }
  }

  return (
    <div id = "page-container">
      <div id = "form-container">
        <h1 id = "postHeader">Your Pet Info</h1>
        <form id = "form"
        onSubmit = {handleSubmit}
        >
          <h1>Name</h1>
          <input
          onChange = {(e) => {
            setName(e.target.value)
            e.target.parentNode.id = "form"
          }}
          placeholder = "Pet Name"
          type = "text"
          value = {name}
          maxLength = {15}
          />
          <h1>Image</h1>
          <input
          onChange = {(e) => {
            setImage(e.target.value)
            e.target.parentNode.id = "form"
          }}
          placeholder = "Pet Image URL"
          type = "text"
          value = {image}
          />
          <h1>Type</h1>
          <select
            onChange = {(e) => {
              setType(e.target.value)
              e.target.parentNode.id = "form"
            }}
          >
            <option
            value = ""
            defaultValue = ""
            disabled selected
            > Select Pet Type
            </option>
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
            <option>
            Fish
          </option>
          <option>
            Reptile
          </option>
          <option>
            Rabbit
          </option>
            <option
            value = "Other"
            > Other
            </option>
          </select>
          <button id = "formSubmit">Submit</button>
        </form>
      </div>
      <div id = "card-div">
        <h1>PREVIEW</h1>
        <PetCard
        image = {image}
        name = {name}
        />
      </div>
    </div>
  )
}

export default PostPet