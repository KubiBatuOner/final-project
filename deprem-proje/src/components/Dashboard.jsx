import { useState } from "react";

export default function Dashboard() {
  const [selectedCity, setSelectedCity] = useState(false);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="pt-[5vh]">
      <div className="font-bold text-[#1F2937] text-[4.5rem] leading-[4.5rem] text-center">
        YÖNETİCİ PANELİ
      </div>
      <div className="flex mt-[8vh]">
        <div className="flex-1">
          <div>
            <div className="mb-10 font-bold text-[#019EC9] text-[3.5rem] leading-[4.5rem]">
              ŞEHİRLER
            </div>
            <div>
              <div className="font-semibold text-[1.7rem] mb-6">ADANA</div>
              <div className="font-semibold text-[1.7rem] my-6">ADIYAMAN</div>
              <div className="font-semibold text-[1.7rem] my-6">DİYARBAKIR</div>
              <div
                className="font-semibold text-[1.7rem] my-6 cursor-pointer"
                onClick={() => handleCityClick("GAZİANTEP")}
              >
                GAZİANTEP
              </div>
              <div className="font-semibold text-[1.7rem] my-6">HATAY</div>
              <div className="font-semibold text-[1.7rem] my-6">
                KAHRAMANMARAŞ
              </div>
              <div className="font-semibold text-[1.7rem] my-6">KİLİS</div>
              <div className="font-semibold text-[1.7rem] my-6">MALATYA</div>
              <div className="font-semibold text-[1.7rem] my-6">OSMANİYE</div>
              <div className="font-semibold text-[1.7rem] my-6">ŞANLIURFA</div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <div>
            <div className="mb-8 font-bold text-[#019EC9] text-[3.5rem] leading-[4.5rem]">
              ŞEHİR BİLGİSİ
            </div>
            {selectedCity === "GAZİANTEP" && (
              <div className="h-auto border-4 border-[#019EC9] mb-8">
                <div>
                  <h2 className="ml-5 mt-3 font-bold text-[2rem]">GAZİANTEP</h2>
                </div>
                <div className="mt-5 border-t-2">
                  <h3 className="font-semibold text-[1.6rem] ml-4 h-auto">
                    Personel Adı Soyadı
                  </h3>
                  <ul className="list-disc">
                    <li className="ml-11 text-[1.3rem]">Sümeyra Al</li>
                    <li className="ml-11 text-[1.3rem]">Canan Tütünen</li>
                  </ul>
                </div>
                <div className="mt-5 border-t-2">
                  <h3 className="font-semibold text-[1.6rem] ml-4">
                    Merkezlerimiz
                  </h3>
                  <div>
                    <ul className="list-disc">
                      <li className="ml-11 text-[1.3rem]">
                        <b>Nurdağı 1 Konteyner Kenti</b>- Görüşme konteynerı
                      </li>
                      <li className="ml-11 text-[1.3rem]">
                        <b>Mobil Ekip</b> (Nurdağı B-1 C1, TOKİ Konteyner Eğitim
                        Kampüsü, Ahbap Okulları, Nurdağı 2, Fatih Mah. Yeni Mah.
                        Kurudere Mah. )
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5 border-t-2">
                  <h3 className="font-semibold text-[1.6rem] ml-4">
                    Merkez Telefon Numaraları
                  </h3>
                  <div>
                    <ul className="list-disc">
                      <li className="ml-11 text-[1.3rem]">0532 330 16 33</li>
                      <li className="ml-11 text-[1.3rem]">0539 774 35 75</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5 border-t-2">
                  <h3 className="font-semibold text-[1.6rem] ml-4">
                    Araç Sayısı
                  </h3>
                  <div>
                    <ul className="list-disc">
                      <li className="ml-11 text-[1.3rem]">1</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5 border-t-2">
                  <div className="font-semibold text-[1.6rem] ml-4">
                    İş Birliği Yapılan Kurumlar
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li className="ml-11 text-[1.3rem]">WHR</li>
                      <li className="ml-11 text-[1.3rem]">AÇEV</li>
                      <li className="ml-11 text-[1.3rem]">ASHB</li>
                      <li className="ml-11 text-[1.3rem]">Sağlık Bakanlığı</li>
                      <li className="ml-11 text-[1.3rem]">GASMEK</li>
                      <li className="ml-11 text-[1.3rem]">
                        Halk Eğitim Merkezi
                      </li>
                      <li className="ml-11 text-[1.3rem]">TOG</li>
                      <li className="ml-11 text-[1.3rem]">
                        Gaziantep Yardım Vakfı
                      </li>
                      <li className="ml-11 text-[1.3rem]">Empati Derneği</li>
                      <li className="ml-11 text-[1.3rem]">KAÇUV</li>
                      <li className="ml-11 text-[1.3rem]">Diyanet</li>
                      <li className="ml-11 text-[1.3rem]">
                        Yöret-Roman Diyalog Ağı - Sıfır Ayrımcılık Derneği
                        (işbirliği için iletişime geçildi)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5 border-t-2 pb-4">
                  <div className="font-semibold text-[1.6rem] ml-4">
                    Ulaşılan Kişi Sayısı
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li className="ml-11 text-[1.3rem]">
                        1 Nisan-1 Mayıs aralığında ulaşılan kişi sayısı 1000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
