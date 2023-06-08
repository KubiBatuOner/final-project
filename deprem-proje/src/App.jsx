/* eslint-disable react/prop-types */
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
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
import tardeDarkLogo from "./images/tardeDarkLogo.svg";
import DestekPage from "./components/DestekPage";
import GonulluPage from "./components/GonulluPage";

function App() {
  return (
    <div className="bg-[url('Desktop-Landing.png')] min-h-screen py-16 font-['Roboto'] max-[415px]:bg-[url('mapZone.png')] max-[415px]:p-0">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/hakkimizda">
            <IntroPage />
          </Route>
          <Route exact path="/volunteer">
            <GonulluPage />
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
            <DestekPage />
          </Route>
          <PrivateRoute>
            <Route exact path="/panel">
              <Dashboard />
            </Route>
          </PrivateRoute>
        </Switch>
        <footer className="flex text-[#3C4058] text-center justify-center p-4 underline font-medium max-[415px]:bg-[#3C4058] max-[415px]:text-white max-[415px]:flex-col max-[415px]:gap-8 max-[415px]:text-start">
          <img src={tardeDarkLogo} className="w-[40vw] min-[415px]:hidden" />
          KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları <br /> © TARDE 2023
        </footer>
      </div>
    </div>
  );
}

export default App;
