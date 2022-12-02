import React, {useState} from "react"
import PetCard from "./PetCard"
import "./PostPet.css"

function PostPet () {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [isEnabled, setIsEnabled] = useState(true)

  const [errorName, setErrorName] = useState(true)
  const [errorImage, setErrorImage] = useState(true)
  const [errorType, setErrorType] = useState(true)

  // function validate() {
  //   if(name.length === 0) {
  //     setErrorName(true)
  //     console.log("name didn't pass")
  //   } else setErrorName(false)

  //   if (document.getElementById("petImage").src === "https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-5718896-4777467.png") {
  //     setErrorImage(true)
  //     console.log("image didn't pass")
  //   } else setErrorImage(false)

  //   if(type === "") {
  //     setErrorType(true)
  //     console.log("type didn't pass")
  //   } else setErrorType(false)

  //   if (!errorName && !errorImage && !errorType) {
  //     console.log("returned true")
  //     return true
  //   } 
  // }

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
    } else {
      console.log("failed, try again")
      setIsEnabled(false)
    }
  }

  return (
    <div id = "page-container">
      <div id = "form-container">
        <form id = "form"
        onSubmit = {handleSubmit}
        >
          <h1>Pet Name</h1>
          <input
          onChange = {(e) => {
            setName(e.target.value)
            setIsEnabled(true)
          }}
          placeholder = "Pet Name"
          type = "text"
          value = {name}
          />
          <h1>Pet Image</h1>
          <input
          onChange = {(e) => {
            setImage(e.target.value)
            setIsEnabled(true)
          }}
          placeholder = "Pet Image URL"
          type = "text"
          value = {image}
          />
          <h1>Pet Type</h1>
          <select
            onChange = {(e) => {
              setType(e.target.value)
              setIsEnabled(true)
            }}
          >
            <option
            value = ""
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

            <option
            value = "Other"
            > Other
            </option>
          </select>
          <button disabled = {!isEnabled}>Submit</button>
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