import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Map from "./components/Map";
import Gaziantep from "./components/Gaziantep";
import Entrance from "./components/Entrance";
import Form from "./components/Form";
import Dashboard3 from "./components/Dashboard3";

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
          <Header />
          <Intro />
        </Route>
        <Route exact path="/adana">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/adiyaman">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/diyarbakir">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/gaziantep">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/hatay">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/kahramanmaras">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/kilis">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/malatya">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/osmaniye">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/sanliurfa">
          <Header />
          <Gaziantep />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/bireysel">
          <Form />
        </Route>
        <Route exact path="/panel">
          <Dashboard3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
