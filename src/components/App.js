import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Game from "./Game"
import PostPet from "./PostPet"
import Leaderboard from "./Leaderboard"


function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then(res => res.json())
    .then(data => setPets(data))
  }, [])

  
  const displayedPets = pets

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Game pets = {displayedPets}/>
        </Route>
        <Route exact path = "/leaderboard">
          <Leaderboard />
        </Route>
        <Route exact path = "/postyourpet">
          <PostPet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
