import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <Intro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
