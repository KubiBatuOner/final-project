import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Intro() {
  return (
    <div className="w-1/2">
      <h2 className="font-bold text-[2.5rem] leading-[4.5rem]">Hakkımızda</h2>
      <div>
        <p className="py-5 text-lg">
          Travma ve Afet Ruh Sağlığı Çalışmaları Derneği, bireysel ve toplumsal
          travmalar konusunda çeşitli alanlarda bilgilendirme etkinliklerinde
          bulunmak, ruhsal travma alanında yapılacak çalışmaları düzenlemek ve
          ilgili alanlarda psikososyal hizmetler yürütmek amacıyla kurulmuştur.
        </p>
      </div>
      <div>
        <a
          href="https://www.instagram.com/tarde_tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
        >
          <FontAwesomeIcon
            className="fa-2xl text-[#019ec9]"
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
            className="fa-2xl text-[#019ec9]"
            icon={faFacebook}
          />
        </a>
        <a
          href="mailto:tarde.bilgi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-2xl text-[#019ec9]"
            icon={faEnvelope}
          />
        </a>
      </div>
    </div>
  );
}
