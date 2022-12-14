import React, {useState} from "react"
import "./Leaderboard.css"

function Leaderboard({pets}) {
  const [filterType, setFilterType] = useState("")
  const [filterName, setFilterName] = useState("")

  const leaderboardPets = pets
  .sort((a, b) => {
    return b.likes - a.likes
  })
  .filter((pet) => pet.type.includes(filterType))
  .filter((pet) => pet.name.toLowerCase().includes(filterName.toLowerCase()))

  function handleType(e) {
    if(e.target.value === "All") {
      setFilterType("")
    } else setFilterType(e.target.value)
  }

  function handlePlace(index) {
    let place = index + 1
      if (place === 1) {
        return "🥇"
      } 
      if (place === 2) {
        return "🥈"
      }
      if (place === 3) {
        return "🥉"
      } else return place
  }

  return (
    <div id = "leaderboard-container">
      <h1 id = "lbHeader">Leaderboard</h1>
      <div id = "filter-container">
        <div id = "filters">
          <input
            value = {filterName}
            onChange = {(e) => setFilterName(e.target.value)}
            type = "text"
            placeholder = "Pet Name Search"
          />

          <select
            placeholder = "Filter By Animal"
            onChange = {handleType}
          >
          <option>
            All
          </option>
          <option>
            Cat
          </option>
          <option>
            Dog
          </option>
          <option>
            Bird
          </option>
          <option>
            Fish
          </option>
          <option>
            Reptile
          </option>
          <option>
            Rabbit
          </option>
          <option>
            Other
          </option>
          </select>
        </div>
      </div>
      <table>
        <thead>
        <tr>
          <th>Place</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Likes</th>
        </tr>
        </thead>
        <tbody>
        {
          leaderboardPets.map((pet, index) => {
            return (
              <tr
                key = {pet.id}
              >
                <td>
                  <p id = "place" >
                    {handlePlace(index)}
                  </p>
                </td>
                <td>
                  <img className = "lbImage" src = {pet.image}/>
                </td>
                <td>{pet.name}</td>
                <td>{`${pet.likes} ❤`}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard
