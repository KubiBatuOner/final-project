import { useState } from "react";
export default function Gaziantep() {
  const [isOpen, setIsOpen] = useState({
    personel: false,
    merkezler: false,
    telefon: false,
    arac: false,
    kurum: false,
    kisi: false,
  });
  const toggleList = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="mb-10">
      <div className="mb-[10vh]">
        <h1 className="font-bold text-[#019EC9] text-[4.5rem] leading-[4.5rem] text-center">
          GAZİANTEP
        </h1>
      </div>
      <div className="flex flex-col gap-y-[3vh]">
        <div>
          <div
            className="font-bold text-[2.5rem] leading-[4.5rem] cursor-pointer "
            onClick={() => toggleList("personel")}
          >
            Personel Adı Soyadı
          </div>
          {isOpen.personel && (
            <div>
              <ul className="list-disc">
                <li className="ml-7 text-[1.5rem]">Sümeyra Al</li>
                <li className="ml-7 text-[1.5rem]">Canan Tütünen</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <div
          className="font-bold text-[2.5rem] leading-[4.5rem] cursor-pointer "
          onClick={() => toggleList("merkezler")}
        >
          Merkezlerimiz
        </div>
        {isOpen.merkezler && (
          <div>
            <ul className="list-disc">
              <li className="ml-7 text-[1.5rem]">
                <b>Nurdağı 1 Konteyner Kenti</b>- Görüşme konteynerı
              </li>
              <li className="ml-7 text-[1.5rem]">
                <b>Mobil Ekip</b> (Nurdağı B-1 C1, TOKİ Konteyner Eğitim
                Kampüsü, Ahbap Okulları, Nurdağı 2, Fatih Mah. Yeni Mah.
                Kurudere Mah. )
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <div
          className="font-bold text-[2.5rem] leading-[4.5rem] cursor-pointer "
          onClick={() => toggleList("telefon")}
        >
          Merkez Telefon Numaraları
        </div>
        {isOpen.telefon && (
          <div>
            <ul className="list-disc">
              <li className="ml-7 text-[1.5rem]">0532 330 16 33</li>
              <li className="ml-7 text-[1.5rem]">0539 774 35 75</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <div
          className="font-bold text-[2.5rem] leading-[4.5rem] cursor-pointer "
          onClick={() => toggleList("arac")}
        >
          Araç Sayısı
        </div>
        {isOpen.arac && (
          <div>
            <ul className="list-disc">
              <li className="ml-7 text-[1.5rem]">1</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <div
          className="font-bold text-[2.5rem] leading-[4.5rem]  cursor-pointer "
          onClick={() => toggleList("kurum")}
        >
          İş Birliği Yapılan Kurumlar
        </div>
        {isOpen.kurum && (
          <div>
            <ul className="list-disc">
              <li className="ml-7 text-[1.5rem]">WHR</li>
              <li className="ml-7 text-[1.5rem]">AÇEV</li>
              <li className="ml-7 text-[1.5rem]">ASHB</li>
              <li className="ml-7 text-[1.5rem]">Sağlık Bakanlığı</li>
              <li className="ml-7 text-[1.5rem]">GASMEK</li>
              <li className="ml-7 text-[1.5rem]">Halk Eğitim Merkezi</li>
              <li className="ml-7 text-[1.5rem]">TOG</li>
              <li className="ml-7 text-[1.5rem]">Gaziantep Yardım Vakfı</li>
              <li className="ml-7 text-[1.5rem]">Empati Derneği</li>
              <li className="ml-7 text-[1.5rem]">KAÇUV</li>
              <li className="ml-7 text-[1.5rem]">Diyanet</li>
              <li className="ml-7 text-[1.5rem]">
                Yöret-Roman Diyalog Ağı - Sıfır Ayrımcılık Derneği (işbirliği
                için iletişime geçildi)
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <div
          className="font-bold text-[2.5rem] leading-[4.5rem]  cursor-pointer  "
          onClick={() => toggleList("kisi")}
        >
          Ulaşılan Kişi Sayısı
        </div>
        {isOpen.kisi && (
          <div>
            <ul className="list-disc">
              <li className="ml-7 text-[1.5rem]">
                1 Nisan-1 Mayıs aralığında ulaşılan kişi sayısı 1000
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
