import { useHistory } from "react-router-dom";
import logo from "../images/MySvg.svg";
import destek from "../images/destek.svg";
import anasayfa from "../images/anasayfa.svg";
import about from "../images/about.svg";
import gonullu from "../images/gonullu.svg";
import iletisim from "../images/iletisim.svg";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import harita from "../images/Vector.svg";

export default function NewHeader() {
  const history = useHistory();
  function handleSend() {
    setTimeout(() => history.push("/"));
  }
  function handleSendAbout() {
    setTimeout(() => history.push("/hakkimizda"));
  }
  function handleSendContact() {
    setTimeout(() => history.push("/bireysel"));
  }
  return (
    <div>
      <div>
        <img src={logo} className="w-[12vw] ml-4 mt-4 mb-12" alt="Logo" />
        <div className="flex flex-col gap-4 ">
          <div className=" flex-row items-center rounded-md w-[60%] hover:bg-ozi">
            <button
              className="flex flex-row gap-2 ml-8  rounded items-center text-[#000C5C] text-lg"
              onClick={handleSend}
            >
              <img src={harita} className="rounded" alt="Logo" />
              Anasayfa
            </button>
          </div>
          <div className=" flex-row items-center rounded-md w-[60%] hover:bg-ozi">
            <button
              className="flex flex-row gap-2 ml-8 rounded items-center text-[#000C5C] text-lg"
              onClick={handleSendAbout}
            >
              <img src={about} className="rounded" alt="Logo" />
              Hakkımızda
            </button>
          </div>
          <div className=" items-center rounded-md w-[60%] hover:bg-ozi">
            {localStorage.getItem("token") !== null ? (
              <button className="hidden">Gönüllü Ol</button>
            ) : (
              <button className="flex flex-row gap-2 ml-8 rounded items-center text-[#000C5C] text-lg">
                <img src={gonullu} className="rounded" alt="Logo" />
                Gönüllü Ol
              </button>
            )}
          </div>
          <div className=" flex-row rounded-md w-[60%] hover:bg-ozi">
            {localStorage.getItem("token") !== null ? (
              <button className="hidden">İletişim</button>
            ) : (
              <button className="flex flex-row gap-2 ml-8 rounded items-center text-[#000C5C] text-lg">
                <img src={iletisim} className="rounded" alt="Logo" />
                İletişim
              </button>
            )}
          </div>
          <div className="flex items-center flex-row rounded-md w-[60%] hover:bg-ozi">
            {localStorage.getItem("token") !== null ? (
              <NavLink to="/panel">
                <button className="flex flex-row gap-2 ml-8 rounded font-bold text-[#000C5C] text-lg">
                  Yönetici Paneli
                </button>
              </NavLink>
            ) : (
              <button className="hidden">Yönetici Paneli</button>
            )}
          </div>
          <div className="flex items-center flex-row rounded-md w-[60%] hover:bg-ozi hidden">
            {localStorage.getItem("token") !== null ? (
              <Logout />
            ) : (
              <NavLink to="/login">
                <button className="flex flex-row gap-2 ml-8 rounded font-bold text-[#000C5C] text-lg">
                  Yönetici Girişi
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        {localStorage.getItem("token") !== null ? (
          ""
        ) : (
          <div className="w-[14vw] mt-4 p-4 rounded-[25px] ml-4 flex flex-col justify-center bg-ozi">
            <button
              onClick={handleSendContact}
              className="text-sm mx-6 hover:bg-yellow-500 font-bold text-black bg-volunteer rounded-lg p-4"
            >
              DESTEK İSTER MİSİN?
            </button>
            <img src={destek} className="mt-5" alt="destek" />
          </div>
        )}
        {localStorage.getItem("token") !== null ? (
          ""
        ) : (
          <div className="w-[14vw] flex text-center text-black bg-[#D9E8E7] rounded-[40px] p-4 my-3 ml-3">
            <p>
              <i>
                İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı Programı
              </i>{" "}
              işbirliği ile
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
