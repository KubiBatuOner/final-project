import tarde from "../images/tarde2.jpg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="pt-[5vh] pb-[5vh] flex justify-between items-center">
      <div className="w-[12vw]">
        <a href="/">
          <img src={tarde} />
        </a>
      </div>
      <nav className="flex justify-between items-center gap-x-[4vw]">
        <div className="flex-col">
          <div className="flex justify-between items-center gap-x-[4vw]">
            <a className="text-[20px] font-semibold" href="hakkimizda">
              Hakkımızda
            </a>
            <a className="text-[20px] font-semibold" href="gaziantep">
              Şehirler
            </a>
            <a
              className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019ec9] border-4 hover:bg-[#019ec9] hover:text-white"
              href="bireysel"
            >
              BİZE ULAŞ
            </a>
            <NavLink to="/login">
              <button className="text-[20px] font-medium">
                Yönetici Girişi
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
