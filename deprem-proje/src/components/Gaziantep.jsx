import { useEffect, useState } from "react";
/* import { sehirlerData } from "./sehirlerData"; */
import { dummyData } from "./dummyData";
import axios from "axios";

export default function Gaziantep() {
  const [selectedCity, setSelectedCity] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((res) => setData(res.data));
    axios
      .get("http://localhost:9000/api/sehir")
      .then((res) => setCity(res.data));
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    console.log(selectedCity);
  };

  return (
    <div>
      <div className="flex mt-[8vh] flex-col xl:flex-row">
        <div className="xl:flex-1">
          <div className="h-auto">
            <div className="mb-10 font-bold text-[#019EC9] text-[3.5rem] leading-[4.5rem]">
              ŞEHİRLER
            </div>
            <div>
              {city.map((s) =>
                selectedCity === `${s.sehir_isim}` ? (
                  <div
                    key={s.sehir_id}
                    className="font-semibold xl:text-[1.7rem] my-6 rounded-2 border-[#019ec9] bg-green-500 border-4 w-[20vw] pl-3 cursor-pointer"
                    onClick={() => handleCityClick(`${s.sehir_isim}`)}
                  >
                    {s.sehir_isim}
                  </div>
                ) : (
                  <div
                    key={s.sehir_id}
                    className="font-semibold xl:text-[1.7rem] my-6 rounded-2 border-[#019ec9] border-4 w-[20vw] pl-3 cursor-pointer"
                    onClick={() => handleCityClick(`${s.sehir_isim}`)}
                  >
                    {s.sehir_isim}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="xl:flex-[2]">
          <div>
            <div className="mb-8 font-bold text-[#019EC9] text-[3.5rem] leading-[4.5rem]">
              ŞEHİR BİLGİSİ
            </div>
            {data.map(
              (a) =>
                selectedCity == a.sehir_isim && (
                  <div
                    key={a.sehir_id}
                    className="h-auto border-4 border-[#019EC9] mb-8"
                  >
                    <div>
                      <h2 className="ml-5 mt-3 font-bold text-[2rem]">
                        {a.sehir_isim}
                      </h2>
                    </div>
                    <div className="mt-5 border-t-2">
                      <h3 className="font-semibold text-[1.6rem] ml-4 h-auto">
                        Personel Adı Soyadı
                      </h3>
                      <ul className="list-disc">
                        {a.personel.map((p) => (
                          <li key={p} className="ml-11 text-[1.3rem]">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 border-t-2">
                      <h3 className="font-semibold text-[1.6rem] ml-4">
                        Merkezlerimiz
                      </h3>
                      <div>
                        <ul className="list-disc">
                          {a.merkez.map((m) => (
                            <li key={m} className="ml-11 text-[1.3rem]">
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 border-t-2">
                      <h3 className="font-semibold text-[1.6rem] ml-4">
                        Merkez Telefon Numaraları
                      </h3>
                      <div>
                        <ul className="list-disc">
                          {a.tel.map((t) => (
                            <li key={t} className="ml-11 text-[1.3rem]">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 border-t-2">
                      <h3 className="font-semibold text-[1.6rem] ml-4">
                        Araç Sayısı
                      </h3>
                      <div>
                        <ul className="list-disc">
                          <li className="ml-11 text-[1.3rem]">{a.arac}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 border-t-2">
                      <div className="font-semibold text-[1.6rem] ml-4">
                        İş Birliği Yapılan Kurumlar
                      </div>
                      <div>
                        <ul className="list-disc">
                          {a.kurum.map((k) => (
                            <li key={k} className="ml-11 text-[1.3rem]">
                              {k}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 border-t-2 pb-4">
                      <div className="font-semibold text-[1.6rem] ml-4">
                        Ulaşılan Kişi Sayısı
                      </div>
                      <div>
                        <ul className="list-disc">
                          <li className="ml-11 text-[1.3rem]">{a.kisi}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
