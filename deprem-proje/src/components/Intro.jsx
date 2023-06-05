import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Entrance from "./Entrance";

export default function Intro() {
  return (
    <div className="flex  ">
      <div className="flex h-auto m-5 rounded-[40px] bg-[#D9E8E7]">
        <div className="flex h-auto  rounded-[40px] bg-[#D9E8E7]">
          <div className="flex text-center bg-[#FBF0D4] h-full w-full rounded-[40px]">
            <Entrance />
            <div className="flex-row md:flex-col mt-10 rounded-lg  ">
              <h2 className="flex justify-start mb-5 mt-10 font-roboto font-bold text-[#030E5E] text-[75px] leading-[4.5rem]">
                hakkımızda
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
                  <FontAwesomeIcon
                    className="fa-3x text-[#019EC9]"
                    icon={faFacebook}
                  />
                </a>
                <a
                  href="mailto:tarde.bilgi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="fa-3x text-[#019EC9]"
                    icon={faEnvelope}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
