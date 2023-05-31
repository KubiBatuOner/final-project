import tarde from "../images/tarde2.jpg";
import Logout from "./Logout";

export default function AdminHeader() {
  return (
    <div className="flex justify-between items-center my-10">
      <div className="w-[9vw]">
        <img src={tarde} alt="Logo" />
      </div>
      <nav className="flex justify-between items-center gap-x-[4vw]">
        <div className="flex-col">
          <div className="flex justify-between items-center gap-x-[4vw]">
            <a className="text-[20px] font-semibold" href="/STK">
              Anasayfa
            </a>
            <a className="text-[20px] font-semibold" href="hakkimizda">
              Hakkımızda
            </a>
            <a className="text-[20px] font-semibold" href="panel">
              Yönetici Paneli
            </a>
            <Logout />
          </div>
        </div>
      </nav>
    </div>
  );
}
