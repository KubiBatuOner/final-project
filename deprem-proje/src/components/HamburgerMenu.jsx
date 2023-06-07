import { useHistory } from "react-router-dom";
import Volunteer from "./Volunteer";
import about from "../images/about.svg";
import gonullu from "../images/gonullu.svg";
import iletisim from "../images/iletisim.svg";
import harita from "../images/Vector.svg";

export default function HamburgerMenu() {
  const history = useHistory();

  function handleSend() {
    setTimeout(() => history.push("/"));
  }
  function handleSendAbout() {
    setTimeout(() => history.push("/hakkimizda"));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 absolute top-0 left-0 w-full h-screen bg-white min-[415px]:hidden">
      <h2 className="text-3xl text-[#000C5C] mr-[50vw]">MENU</h2>
      <div className="flex flex-col justify-center items-center w-[60%] gap-3 ">
        <div className="flex justify-start items-center rounded-md w-[70%] hover:bg-ozi">
          <button
            className="flex flex-row gap-2  rounded items-center text-[#000C5C] text-2xl"
            onClick={handleSend}
          >
            <img src={harita} className="rounded" alt="Logo" />
            Harita
          </button>
        </div>
        <div className="flex justify-start items-center rounded-md w-[70%] hover:bg-ozi">
          <button
            className="flex flex-row gap-2 rounded items-center text-[#000C5C] text-2xl"
            onClick={handleSendAbout}
          >
            <img src={about} className="rounded" alt="Logo" />
            Hakkımızda
          </button>
        </div>
        <div className="flex justify-start items-center rounded-md w-[70%] hover:bg-ozi">
          {localStorage.getItem("token") !== null ? (
            <button className="hidden">Gönüllü Ol</button>
          ) : (
            <button className="flex flex-row gap-2 rounded items-center text-[#000C5C] text-2xl">
              <img src={gonullu} className="rounded" alt="Logo" />
              Gönüllü Ol
            </button>
          )}
        </div>
        <div className="flex justify-start items-center rounded-md w-[70%] hover:bg-ozi">
          {localStorage.getItem("token") !== null ? (
            <button className="hidden">İletişim</button>
          ) : (
            <button className="flex flex-row gap-2 rounded items-center text-[#000C5C] text-2xl">
              <img src={iletisim} className="rounded" alt="Logo" />
              İletişim
            </button>
          )}
        </div>
      </div>
      {localStorage.getItem("token") !== null ? "" : <Volunteer />}
      {localStorage.getItem("token") !== null ? (
        ""
      ) : (
        <div className="w-[14vw] flex text-center text-black bg-[#D9E8E7] rounded-[40px] p-4 my-3 ml-3 max-[415px]:w-[80vw] max-[415px]:bg-mobil max-[415px]:ml-0">
          <p>
            <i>
              İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı Programı
            </i>{" "}
            işbirliği ile
          </p>
        </div>
      )}
    </div>
  );
}
