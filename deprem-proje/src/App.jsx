/* eslint-disable react/prop-types */
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/HomePage";
import IntroPage from "./components/IntroPage";
import HatayPage from "./components/SehirPages/HatayPage";
import AdanaPage from "./components/SehirPages/AdanaPage";
import AdiyamanPage from "./components/SehirPages/AdiyamanPage";
import DiyarbakirPage from "./components/SehirPages/DiyarbakirPage";
import GaziantepPage from "./components/SehirPages/GaziantepPage";
import KahramanmarasPage from "./components/SehirPages/KahramanmarasPage";
import KilisPage from "./components/SehirPages/KilisPage";
import MalatyaPage from "./components/SehirPages/MalatyaPage";
import OsmaniyePage from "./components/SehirPages/OsmaniyePage";
import SanliurfaPage from "./components/SehirPages/SanliurfaPage";

function App() {
  return (
    <div className="bg-[url('Desktop-Landing.png')] min-h-screen py-16 font-['Roboto']">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/hakkimizda">
            <IntroPage />
          </Route>
          <Route exact path="/adana">
            <AdanaPage />
          </Route>
          <Route exact path="/adiyaman">
            <AdiyamanPage />
          </Route>
          <Route exact path="/diyarbakir">
            <DiyarbakirPage />
          </Route>
          <Route exact path="/gaziantep">
            <GaziantepPage />
          </Route>
          <Route exact path="/hatay">
            <HatayPage />
          </Route>
          <Route exact path="/kahramanmaras">
            <KahramanmarasPage />
          </Route>
          <Route exact path="/kilis">
            <KilisPage />
          </Route>
          <Route exact path="/malatya">
            <MalatyaPage />
          </Route>
          <Route exact path="/osmaniye">
            <OsmaniyePage />
          </Route>
          <Route exact path="/sanliurfa">
            <SanliurfaPage />
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
        <footer className="flex text-[#3C4058] text-center justify-center p-4 underline font-medium">
          KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları © TARDE 2023
        </footer>
      </div>
    </div>
  );
}

export default App;
