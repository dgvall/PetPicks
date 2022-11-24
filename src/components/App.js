import React from "react"
import {Switch, Route} from "react-router-dom"
import NavBar from "./NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/">
          play
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
