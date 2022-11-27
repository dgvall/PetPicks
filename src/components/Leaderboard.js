import React from "react"
import "./Leaderboard.css"

function Leaderboard() {
  return (
    <div id = "leaderboard-container">
      <div id = "filter-container">
        <div id = "filters">
          <input
          value = "Search"
          type = "text"
          />

          <select
          placeholder = "Filter By Animal"
          >
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
        <tr>
          <th>Place</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Likes</th>
        </tr>
        <tr>
          <td>1st Place</td>
          <td>DogPicHere</td>
          <td>Rufus</td>
          <td>200 Likes</td>
        </tr>
        <tr>
          <td>2nd Place</td>
          <td>DogPicHere</td>
          <td>Kyle</td>
          <td>150 Likes</td>
        </tr>
      </table>
    </div>
  )
}

export default Leaderboard