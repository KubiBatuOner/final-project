import { HashLink } from "react-router-hash-link";
import tarde from "../images/tarde2.jpg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="pt-[5vh] pb-[5vh] flex justify-between items-center">
      <div className="w-[12vw]">
        <img src={tarde} />
      </div>
      <nav className="flex justify-between items-center gap-x-[4vw]">
        <div className="flex-col">
          <div className="flex justify-between items-center gap-x-[4vw]">
            <a className="text-[20px] font-semibold" href="hakkimizda">
              Hakkımızda
            </a>
            <HashLink smooth to="/#sehirler">
              <a className="text-[20px] font-semibold" href="">
                Şehirler
              </a>
            </HashLink>
            <a
              className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019ec9] border-4 hover:bg-[#019ec9] hover:text-white"
              href=""
            >
              BİZE ULAŞ
            </a>
            <NavLink to="/login">
              <button className="text-[20px] font-medium">Giriş Yap</button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
