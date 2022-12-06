import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <div className = "navBar">
        <div>
          <NavLink id = "play" className = "text" exact to = "/play">PLAY</NavLink>
        </div>
        <h1 className = "title">PetPicks</h1>
         <div className = "doubleText">
          <NavLink id = "leaderboard" className = "text" to = "/leaderboard">LEADERBOARD</NavLink>
          <NavLink id = "postpet" className = "text" to = "/postyourpet">POST YOUR PET</NavLink>
        </div>
    </div>
  )
}

export default NavBar