import { useHistory } from "react-router-dom";
import logo from "../images/logo.svg";
import harita from "../images/Vector.svg";
import ayarlar from "../images/sun.svg";
import gonullu from "../images/gonullu.svg";
import iletisim from "../images/iletisim.svg";
import Logout from "./Logout";
import { useState } from "react";

export default function NewAdminHeader() {
  const [activeSection, setActiveSection] = useState("ayarlar");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const history = useHistory();

  function handleSend() {
    setTimeout(() => history.push("/"), 1000);
  }
  function handleSendAbout() {
    setTimeout(() => history.push("/panel"));
  }
  return (
    <div className="flex justify-between items-center my-6">
      <img src={logo} className="w-[20vw]" alt="Logo" />
      <div className="flex gap-4 ">
        <div className="flex gap-2 py-2 px-4 rounded-md items-center hover:bg-ozi">
          <img src={harita} className=" rounded" alt="Logo" />
          <button onClick={handleSend} className="flex gap-2 rounded">
            Harita Bilgileri
          </button>
        </div>
        <div
          className={
            activeSection === "ayarlar"
              ? "mr-4 active flex gap-2 py-2 px-4 rounded-md items-center bg-ozi hover:bg-ozi"
              : "mr-4"
          }
          onClick={() => handleSectionClick("ayarlar")}
        >
          <img src={ayarlar} className=" rounded" alt="Logo" />
          <button className="rounded" onClick={handleSendAbout}>
            Sistem Ayarları
          </button>
        </div>
        <div className="flex gap-2 py-2 px-4 rounded-md items-center hover:bg-ozi">
          <img src={gonullu} className=" rounded" alt="Logo" />
          <button className="flex gap-2 rounded">Gönüllüler</button>
        </div>
        <div className="flex gap-2 py-2 px-4 rounded-md items-center hover:bg-ozi">
          <img src={iletisim} className=" rounded" alt="Logo" />
          <button className="flex gap-2 rounded">İletişim</button>
        </div>
        <div className="flex gap-2 py-2 px-4 rounded-md items-center hover:bg-ozi">
          <Logout />
        </div>
      </div>
    </div>
  );
}
