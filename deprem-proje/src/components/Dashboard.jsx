import { useState } from "react";
import "../App.css";
import KurumTablo from "./Tablolar/KurumTablo";
import MerkezTablo from "./Tablolar/MerkezTablo";
import PersonelTablo from "./Tablolar/PersonelTablo";
import HizmetTablo from "./Tablolar/HizmetTablo";
import EnvanterTablo from "./Tablolar/EnvanterTablo";
import SehirTablo from "./Tablolar/SehirTablo";
import AdminHeader from "./AdminHeader";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("personel");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="App2">
      <AdminHeader />
      <div className="mb-8 ml-6">
        <nav>
          <ul className="flex">
            <li
              className={
                activeSection === "personel"
                  ? "mr-4 active cursor-pointer font-bold  rounded-2xl border-[#019EC9] border-4  text-white bg-[#019EC9] px-3"
                  : "mr-4 cursor-pointer font-bold"
              }
              onClick={() => handleSectionClick("personel")}
            >
              Personel
            </li>
            <li
              className={
                activeSection === "merkez"
                  ? "mr-4 active cursor-pointer font-bold  bg-[#019EC9]  rounded-2xl border-[#019EC9] border-4 text-white px-3"
                  : "mr-4 cursor-pointer font-bold"
              }
              onClick={() => handleSectionClick("merkez")}
            >
              Merkez
            </li>
            <li
              className={
                activeSection === "kurum"
                  ? "mr-4 active cursor-pointer font-bold  bg-[#019EC9]  rounded-2xl border-[#019EC9] border-4  text-white px-3"
                  : "mr-4 cursor-pointer font-bold"
              }
              onClick={() => handleSectionClick("kurum")}
            >
              Kurum
            </li>
            <li
              className={
                activeSection === "hizmet"
                  ? "mr-4 active cursor-pointer font-bold  bg-[#019EC9]  rounded-2xl border-[#019EC9] border-4  text-white px-3"
                  : "mr-4 cursor-pointer font-bold"
              }
              onClick={() => handleSectionClick("hizmet")}
            >
              Hizmet
            </li>
            <li
              className={
                activeSection === "envanter"
                  ? "mr-4 active cursor-pointer font-bold  bg-[#019EC9]  rounded-2xl border-[#019EC9] border-4  text-white px-3"
                  : "mr-4 cursor-pointer font-bold"
              }
              onClick={() => handleSectionClick("envanter")}
            >
              Envanter
            </li>
            <li
              className={
                activeSection === "sehir"
                  ? "mr-4 active cursor-pointer font-bold  bg-[#019EC9]  rounded-2xl border-[#019EC9] border-4  text-white px-3"
                  : "mr-4 cursor-pointer font-bold"
              }
              onClick={() => handleSectionClick("sehir")}
            >
              Şehir
            </li>
          </ul>
        </nav>
      </div>
      {activeSection === "personel" && <PersonelTablo />}
      {activeSection === "merkez" && <MerkezTablo />}
      {activeSection === "kurum" && <KurumTablo />}
      {activeSection === "hizmet" && <HizmetTablo />}
      {activeSection === "envanter" && <EnvanterTablo />}
      {activeSection === "sehir" && <SehirTablo />}
    </div>
  );
}
