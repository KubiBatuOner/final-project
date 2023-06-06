import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import sol_kız from "../images/sol_kız.svg";
import sag_erkek from "../images/sag_erkek.svg";

export default function Intro() {
  return (
    <div className="flex mr-10">
      <div className="flex flex-col text-center h-full w-full rounded-[40px]">
        <div className="flex-row md:flex-col rounded-lg">
          <h2 className="flex justify-start mb-6 font-roboto font-bold text-[#030E5E] text-[75px] leading-[4.5rem]">
            Hakkımızda
          </h2>
          <p className="flex justify-start py-5 text-lg text-[#1F2937] text-[1.4rem] text-start">
            Travma ve Afet Ruh Sağlığı Çalışmaları Derneği, bireysel ve
            toplumsal travmalar konusunda çeşitli alanlarda bilgilendirme
            etkinliklerinde bulunmak, ruhsal travma alanında yapılacak
            çalışmaları düzenlemek ve ilgili alanlarda psikososyal hizmetler
            yürütmek amacıyla kurulmuştur.
          </p>

          <div className="flex justify-center mt-4">
            <a
              href="https://www.instagram.com/tarde_tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FontAwesomeIcon
                className="fa-3x text-[#030E5E]"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.facebook.com/tardeorgtr/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FontAwesomeIcon
                className="fa-3x text-[#030E5E]"
                icon={faFacebook}
              />
            </a>
            <a
              href="mailto:tarde.bilgi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="fa-3x text-[#030E5E]"
                icon={faEnvelope}
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between">
          <img src={sol_kız} />
          <img src={sag_erkek} />
        </div>
      </div>
    </div>
  );
}
