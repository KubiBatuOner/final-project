import { useHistory } from "react-router-dom";
import logo from "../images/MySvg.svg";
import destek from "../images/destek.svg";
import about from "../images/about.svg";
import gonullu from "../images/gonullu.svg";
import iletisim from "../images/iletisim.svg";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import harita from "../images/Vector.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";

export default function NewHeader() {
  const [nav, setNav] = useState(false);
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
  function handleVolunteerContact() {
    setTimeout(() => history.push("/volunteer"));
  }
  return (
    <>
      <div>
        <div className="max-[415px]:flex max-[415px]:gap-40 max-[415px]:items-center">
          <img
            src={logo}
            className="w-[12vw] ml-4 mt-4 mb-12 max-[415px]:m-0 max-[415px]:w-[30vw] max-[415px]:mt-4"
            alt="Logo"
          />
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-3 z-10 min-[415px]:hidden"
          >
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          {nav && <HamburgerMenu />}
        </div>
        <div className="flex flex-col gap-4 max-[415px]:hidden">
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
              <button
                className="flex flex-row gap-2 ml-8 rounded items-center text-[#000C5C] text-lg"
                onClick={handleVolunteerContact}
              >
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
          <div className="w-[14vw] mt-4 gap-6 p-4 rounded-[25px] ml-4 flex flex-col justify-center bg-ozi max-[415px]:w-[80vw] max-[415px]:ml-0">
            <button
              onClick={handleSendContact}
              className="text-sm mx-6 hover:bg-yellow-500 font-bold text-black bg-volunteer rounded-lg p-4"
            >
              DESTEK İSTER MİSİN?
            </button>
            <img src={destek} alt="destek" />
          </div>
        )}
        <div className="min-[415px]:hidden flex justify-center">
          <button className="min-[415px]:hidden text-sm font-bold bg-volunteer py-4 w-[60vw] rounded-lg">
            DESTEK MERKEZLERİ
          </button>
        </div>
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
    </>
  );
}
