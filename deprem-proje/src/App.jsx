/* eslint-disable react/prop-types */
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Map from "./components/Map";
import Gaziantep from "./components/Gaziantep";
import Entrance from "./components/Entrance";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminHeader from "./components/AdminHeader";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Entrance />
        </Route>
        <Route exact path="/STK">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Map />
        </Route>
        <Route exact path="/hakkimizda">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Intro />
        </Route>
        <Route exact path="/adana">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/adiyaman">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/diyarbakir">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/gaziantep">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/hatay">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/kahramanmaras">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/kilis">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/malatya">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/osmaniye">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/sanliurfa">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <Gaziantep />
        </Route>
        <Route exact path="/login">
          <Header />
          <Login />
        </Route>
        <Route exact path="/bireysel">
          <Form />
        </Route>
        <PrivateRoute>
          <Route exact path="/panel">
            <Dashboard />
          </Route>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
