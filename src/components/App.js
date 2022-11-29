import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Game from "./Game"
import PostPet from "./PostPet"
import Leaderboard from "./Leaderboard"


function App() {
  const [pets, setPets] = useState([])
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(2)

  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then(res => res.json())
    .then(data => setPets(data))
  }, [])

  function onPetClick(id, likes) {
    setStart(() => start + 1)
    setEnd(() => end + 1)

    fetch(`http://localhost:3000/pets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1
      }),
    })
      .then(res => res.json())
      .then(updatedPet => updatedPet)
  }

  const displayedPets = pets.slice(start,end)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Game
          pets = {displayedPets}
          handlePetClick = {onPetClick}
          />
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
