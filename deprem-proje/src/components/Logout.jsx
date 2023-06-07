/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

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
          className="flex flex-row gap-2 rounded font-bold text-[#000C5C] text-lg items-center"
        >
          <FiLogOut />
          Çıkış Yap
        </button>
      )}
    </span>
  );
}
