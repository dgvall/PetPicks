import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Game from "./Game"
import PostPet from "./PostPet"
import Leaderboard from "./Leaderboard"
import PetSubmitted from "./PetSubmitted"

function App() {
  const [shuffledPets, setShuffledPets] = useState([])
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(2)

  // Fisher-Yates algorithm
  function shuffle(arr) {

    const array = [...arr]

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then(res => res.json())
    .then(data => setShuffledPets(shuffle(data)))
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
  const displayedPets = shuffledPets.slice(start,end)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/play">
          <Game
          pets = {displayedPets}
          handlePetClick = {onPetClick}
          />
        </Route>
        <Route exact path = "/leaderboard">
          <Leaderboard
          pets = {shuffledPets}
          />
        </Route>
        <Route exact path = "/postyourpet">
          <PostPet />
        </Route>
        <Route exact path = "/submitted">
          <PetSubmitted />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
