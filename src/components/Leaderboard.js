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

  return (
    <div id = "leaderboard-container">
      <div id = "filter-container">
        <div id = "filters">
          <input
          value = {filterName}
          onChange = {(e) => setFilterName(e.target.value)}
          type = "text"
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
            Other
          </option>
          </select>
        </div>

      <div>
        <button>Day</button>
        <button>Week</button>
        <button>All Time</button>
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
                <td>{index + 1}</td>
                <td>
                  <img className = "lbImage" src = {pet.image}/>
                </td>
                <td>{pet.name}</td>
                <td>{pet.likes}</td>
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