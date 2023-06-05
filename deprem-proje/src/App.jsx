/* eslint-disable react/prop-types */
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Map from "./components/Map";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminHeader from "./components/AdminHeader";
import Adana from "./components/Sehirler/Adana";
import Adiyaman from "./components/Sehirler/Adiyaman";
import Diyarbakir from "./components/Sehirler/Diyarbakir";
import Gaziantep from "./components/Sehirler/Gaziantep";
import Hatay from "./components/Sehirler/Hatay";
import Kahramanmaras from "./components/Sehirler/Kahramanmaras";
import Kilis from "./components/Sehirler/Kilis";
import Malatya from "./components/Sehirler/Malatya";
import Osmaniye from "./components/Sehirler/Osmaniye";
import Sanliurfa from "./components/Sehirler/Sanliurfa";
import HomePage from "./components/HomePage";
import NewAdminHeader from "./components/NewAdminHeader";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
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
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Adana />
          </div>
        </Route>
        <Route exact path="/adiyaman">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Adiyaman />
          </div>
        </Route>
        <Route exact path="/diyarbakir">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Diyarbakir />
          </div>
        </Route>
        <Route exact path="/gaziantep">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Gaziantep />
          </div>
        </Route>
        <Route exact path="/hatay">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Hatay />
          </div>
        </Route>
        <Route exact path="/kahramanmaras">
          {localStorage.getItem("token") !== null ? (
            <NewAdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Kahramanmaras />
          </div>
        </Route>
        <Route exact path="/kilis">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Kilis />
          </div>
        </Route>
        <Route exact path="/malatya">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Malatya />
          </div>
        </Route>
        <Route exact path="/osmaniye">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Osmaniye />
          </div>
        </Route>
        <Route exact path="/sanliurfa">
          {localStorage.getItem("token") !== null ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          <div className="flex max-[1080px]:flex-col">
            <Map />
            <Sanliurfa />
          </div>
        </Route>
        <Route exact path="/login">
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
