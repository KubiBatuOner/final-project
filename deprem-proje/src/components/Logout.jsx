/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Logout() {
  let location = useLocation();
  useEffect(() => {}, [location]);

  const history = useHistory();
  const triggerLogout = (e) => {
    console.log("logout butonuna basıldı");
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <span>
      {localStorage.getItem("token") === null ? (
        ""
      ) : (
        <button
          onClick={triggerLogout}
          className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019ec9] border-4 hover:bg-[#019ec9] hover:text-white"
        >
          Çıkış Yap
        </button>
      )}
    </span>
  );
}
