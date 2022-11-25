import React, {useState} from "react"
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"
import Game from "./Game"


function App() {
  const [pets, setPets] = useState([])

  // useEffect GET request to pets state

  const staticPets = [
    {
      id: 1,
      name: "Jared",
      image: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      type: "Dog"
    },
    {
      id: 2,
      name: "Max",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
      type: "Dog"
    },
    // {
        // id: 3,
    //   name: "Kit",
    //   image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*",
    //   type: "Cat"
    // }
  ]
  
  // const displayedPets = pets

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/">
          <Game pets = {staticPets}/>
        </Route>
        <Route exact path = "/leaderboard">
          leaderboard
        </Route>
        <Route exact path = "/postyourpet">
          postyourpet
        </Route>
      </Switch>
    </div>
  );
}

export default App;
