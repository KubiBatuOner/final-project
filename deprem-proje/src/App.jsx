/* eslint-disable react/prop-types */
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
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
import IntroPage from "./components/IntroPage";
import HeaderPage from "./components/HeaderPage";

function App() {
  return (
    <div className="bg-[url('Desktop-Landing.png')] py-16">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/hakkimizda">
            <IntroPage />
          </Route>
          <Route exact path="/adana">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 rounded-lg">
                <Adana />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 rounded-lg">
                <Adana />
              </div>
            )}
          </Route>
          <Route exact path="/adiyaman">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Adiyaman />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Adiyaman />
              </div>
            )}
          </Route>
          <Route exact path="/diyarbakir">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Diyarbakir />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Diyarbakir />
              </div>
            )}
          </Route>
          <Route exact path="/gaziantep">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Gaziantep />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Gaziantep />
              </div>
            )}
          </Route>
          <Route exact path="/hatay">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute right-40 bottom-40 rounded-lg">
                <Hatay />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 rounded-lg">
                <Hatay />
              </div>
            )}
          </Route>
          <Route exact path="/kahramanmaras">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Kahramanmaras />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Kahramanmaras />
              </div>
            )}
          </Route>
          <Route exact path="/kilis">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Kilis />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Kilis />
              </div>
            )}
          </Route>
          <Route exact path="/malatya">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Malatya />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Malatya />
              </div>
            )}
          </Route>
          <Route exact path="/osmaniye">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Osmaniye />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Osmaniye />
              </div>
            )}
          </Route>
          <Route exact path="/sanliurfa">
            <HeaderPage />
            {localStorage.getItem("token") !== null ? (
              <div className="absolute left-[320px] bottom-40 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Sanliurfa />
              </div>
            ) : (
              <div className="absolute right-40 -bottom-16 bg-[#ff8c00] rounded-lg border-4 border-[#000C5C]">
                <Sanliurfa />
              </div>
            )}
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
    </div>
  );
}

export default App;
