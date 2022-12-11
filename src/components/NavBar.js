import React from "react"
import {NavLink, useHistory} from "react-router-dom"
import "./NavBar.css"

function NavBar({handleReshuffle}) {
  const history = useHistory()
  return (
    <div className = "navBar">
        <div>
          <NavLink
          onClick = {handleReshuffle}
          id = "play"
          className = "text"
          exact to = "/play"
          > PLAY</NavLink>
        </div>
        <h1 onClick = {() => history.push("/")}
        className = "title">PetPicks</h1>
         <div className = "doubleText">
          <NavLink
          onClick = {handleReshuffle}
          id = "leaderboard"
          className = "text"
          to = "/leaderboard"
          >LEADERBOARD</NavLink>
          <NavLink
          onClick = {handleReshuffle}
          id = "postpet"
          className = "text"
          to = "/postyourpet"
          >POST YOUR PET</NavLink>
        </div>
    </div>
  )
}

export default NavBar