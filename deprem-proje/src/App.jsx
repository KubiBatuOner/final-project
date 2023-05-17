import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Map from "./components/Map";
import Gaziantep from "./components/Gaziantep";
import Entrance from "./components/Entrance";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route exact path="/STK">
          <Header />
          <Map />
        </Route>
        <Route exact path="/hakkimizda">
          <Intro />
        </Route>
        <Route exact path="/gaziantep">
          <Gaziantep />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/bireysel">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
