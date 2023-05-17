import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";

export default function Intro() {
  const history = useHistory();
  return (
    <div className="w-1/ pt-[10vh] ">
      <div className="flex justify-end mt-4">
        <button
          className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019EC9] border-4 hover:bg-[#019EC9] hover:text-white "
          onClick={() => history.push("/STK")}
        >
          Anasayfa
        </button>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-[#1F2937] text-[4.5rem] leading-[4.5rem] mt-8 text-center">
          HAKKIMIZDA
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p className="py-5 text-lgtext-[#1F2937] text-[1.4rem]  text-center">
          Travma ve Afet Ruh Sağlığı Çalışmaları Derneği, bireysel ve toplumsal
          travmalar konusunda çeşitli alanlarda bilgilendirme etkinliklerinde
          bulunmak, ruhsal travma alanında yapılacak çalışmaları düzenlemek ve
          ilgili alanlarda psikososyal hizmetler yürütmek amacıyla kurulmuştur.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://www.instagram.com/tarde_tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
        >
          <FontAwesomeIcon
            className="fa-3x text-[#019EC9]"
            icon={faInstagram}
          />
        </a>
        <a
          href="https://www.facebook.com/tardeorgtr/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
        >
          <FontAwesomeIcon className="fa-3x text-[#019EC9]" icon={faFacebook} />
        </a>
        <a
          href="mailto:tarde.bilgi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa-3x text-[#019EC9]" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}
