
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import GameRouter from "./pages/GameRouter";

import "./styles/bootstrap.scss";
import "./styles/index.scss";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const gameMode = useSelector((state: RootState) => state.room.gameState);

  return (
    <Switch>
      {gameMode && <Route path="/:roomID" exact component={GameRouter} />}
      <Route path="/:roomID?" component={HomePage} />
    </Switch>
  );
}

export default App;
