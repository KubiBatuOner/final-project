import "../App.css";
import tarde from "../images/tarde2.jpg";
import KurumTablo from "./Tablolar/KurumTablo";
import Logout from "./Logout";
import MerkezTablo from "./Tablolar/MerkezTablo";
import PersonelTablo from "./Tablolar/PersonelTablo";
import HizmetTablo from "./Tablolar/HizmetTablo";
import EnvanterTablo from "./Tablolar/EnvanterTablo";
import SehirTablo from "./Tablolar/SehirTablo";

export default function Dashboard() {
  return (
    <div className="App2">
      <div className="flex justify-between items-center my-10">
        <div className="w-[9vw]">
          <img src={tarde} />
        </div>
        <div className="font-bold text-[#1F2937] text-[4.5rem] leading-[4.5rem] text-center">
          YÖNETİCİ PANELİ
        </div>
        <Logout />
      </div>
      <PersonelTablo />
      <MerkezTablo />
      <KurumTablo />
      <HizmetTablo />
      <EnvanterTablo />
      <SehirTablo />
    </div>
  );
}
