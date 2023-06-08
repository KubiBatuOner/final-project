import sol_kız from "../images/sol_kız.svg";
import sag_erkek from "../images/sag_erkek.svg";
import Kart from "./Kart";
import Volunteer from "./Volunteer";

export default function Intro() {
  return (
    <div className="flex">
      <div className="flex text-center h-full w-full rounded-[40px] gap-8">
        <div className="flex-1 flex flex-col gap-5 md:flex-col rounded-lg">
          <h2 className="flex justify-start mb-6 font-roboto font-bold text-[#030E5E] text-[64px] leading-[75px] mr-6">
            Hakkımızda
          </h2>
          <p className="text-[32px] text-[#4A4A4A] font-thin leading-[45px] text-start ml-10 w-[30vw]">
            Affan kötülükten uzak durandır. Besleyicidir, Bağımsızdır,
            Çeşitlidir, Barışseverdir, Kapsayıcıdır
          </p>
          <p className="py-5 text-lg text-[#4A4A4A] text-[14px] text-start ml-10">
            Affan,<u>Travma ve Afet Ruh Sağlığı Çalışmaları Derneği (TARDE)</u>{" "}
            bünyesinde Kahramanmaraş Pazarcık merkezli deprem sonrası Maraş,
            Hatay, Antep, İskenderun, Osmaniye, Diyarbakır, Urfa, Adıyaman,
            Malatya’daki merkezlerde depremden etkilenen bireylere yönelik
            ücretsiz psikolojik destek hizmeti sunan, İstanbul Bilgi
            Üniversitesi Travma ve Afet Ruh Sağlığı Çalışmaları Uygulamalı Ruh
            Sağlığı Programı tarafından desteklenen psikososyal destek hizmeti
            projesidir.
          </p>
          <div className="mt-20">
            {localStorage.getItem("token") !== null ? "" : <Kart />}
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 gap-8">
          <div className="flex justify-end mr-8">
            <img src={sol_kız} className="w-[10vw] " />
          </div>
          <div className="flex justify-end mr-8">
            <img src={sag_erkek} className="w-[10vw] " />
          </div>
          <div className="flex justify-end">
            {localStorage.getItem("token") !== null ? "" : <Volunteer />}
          </div>
        </div>
      </div>
    </div>
  );
}
