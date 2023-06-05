import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
import logo from "../images/MySvg.svg";
import destek from "../images/destek.svg";
import anasayfa from "../images/anasayfa.svg";
import about from "../images/about.svg";
import gonullu from "../images/gonullu.svg";
import iletisim from "../images/iletisim.svg";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import Dashboard from "./Dashboard";

export default function NewHeader() {
  const history = useHistory();

  function handleSend() {
    toast("Anasayfaya yönlendiriliyorsunuz", {
      position: "top-right",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Zoom,
    });
    setTimeout(() => history.push("/"), 200);
  }
  function handleSendAbout() {
    setTimeout(() => history.push("/hakkimizda"));
  }
  function handleSendContact() {
    setTimeout(() => history.push("/bireysel"));
  }
  return (
    <div className="w-64">
      <img src={logo} className="h-52 w-52 ml-4 mt-4 mb-12" alt="Logo" />
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-row items-center rounded-md hover:bg-ozi">
          <button
            onClick={handleSend}
            className="flex flex-row gap-2 ml-8 rounded"
          >
            <img src={anasayfa} className="h-full w-full rounded" alt="Logo" />
            Anasayfa
          </button>
        </div>
        <div className="flex flex-row items-center rounded-md hover:bg-ozi">
          <button
            className="flex flex-row gap-2 ml-8 rounded"
            onClick={handleSendAbout}
          >
            <img src={about} className="h-full w-full rounded" alt="Logo" />
            Hakkımızda
          </button>
        </div>
        <div className="flex items-center rounded-md hover:bg-ozi">
          <button className="flex flex-row gap-2 ml-8 rounded">
            <img src={gonullu} className="h-full w-full rounded" alt="Logo" />
            Gönüllü&nbsp;Ol
          </button>
        </div>
        <div className="flex flex-row rounded-md hover:bg-ozi">
          <button className="flex flex-row gap-2 ml-8 rounded">
            <img src={iletisim} className="h-full w-full rounded" alt="Logo" />
            İletişim
          </button>
        </div>
        <div className="flex items-center flex-row rounded-md hover:bg-ozi">
          {localStorage.getItem("token") !== null ? (
            <NavLink to="/panel">
              <button className="flex flex-row gap-2 ml-8 rounded font-bold">
                Yönetici Paneli
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="flex flex-row gap-2 ml-8 rounded font-bold">
                Yönetici Paneli
              </button>
            </NavLink>
          )}
        </div>
        <div className="flex items-center flex-row rounded-md hover:bg-ozi">
          {localStorage.getItem("token") !== null ? (
            <Logout />
          ) : (
            <NavLink to="/login">
              <button className="flex flex-row gap-2 ml-8 rounded font-bold">
                Yönetici Girişi
              </button>
            </NavLink>
          )}
        </div>
        <div
          className=" mt-4 p-4 rounded-[25px] ml-4"
          style={{ backgroundColor: "rgba(246, 190, 49, 0.2)" }}
        >
          <button
            onClick={handleSendContact}
            className="text-sm hover:bg-yellow-500 ml-4 font-bold text-black bg-yellow-300 rounded-lg p-4"
          >
            DESTEK İSTER MİSİN?
          </button>
          <img src={destek} className="h-full w-full mt-5" alt="destek" />
        </div>
        <div className="flex text-center text-black bg-[#D9E8E7] rounded-[40px] p-4 my-3 ml-3">
          <p>
            <i>
              İstanbul Bilgi Üniversitesi Travma ve Afet Ruh Sağlığı Programı
            </i>{" "}
            işbirliği ile
          </p>
        </div>
      </div>
    </div>
  );
}
