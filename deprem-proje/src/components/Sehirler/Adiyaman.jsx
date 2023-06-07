import { useEffect, useState } from "react";
import axios from "axios";

export default function Adiyaman() {
  const [merkezData, setMerkezData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);

  const sehir = "Adıyaman";

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/merkez")
      .then((res) =>
        setMerkezData(res.data?.filter((e) => e.sehir_isim == sehir))
      );
    axios
      .get("http://localhost:9000/api/envanter")
      .then((res) =>
        setEnvanterData(res.data?.filter((e) => e.sehir_isim == sehir))
      );
    axios
      .get("http://localhost:9000/api/kurum")
      .then((res) =>
        setKurumData(res.data?.filter((e) => e.sehir_isim == sehir))
      );
  }, []);

  return (
    <div className="flex flex-col justify-center rounded-2xl p-5 bg-white">
      <div>
        <div>
          <div className="mb-8 font-bold text-[#000C5C] text-[1.8rem] leading-[28.13px]">
            {sehir.toLocaleUpperCase("tr-TR")}
          </div>
          <div className="mt-5">
            {merkezData.map((a, index) => (
              <ul key={index} className="list-image-[url(yuvarlak.svg)]">
                <li className="ml-11 text-[1.2rem] font-medium text-[#000C5C]">
                  {a.merkez_isim}
                </li>
              </ul>
            ))}
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-[1.5rem] ml-4">Araç Sayısı</h3>
            <div>
              {envanterData.map((a, index) => (
                <ul key={index} className="list-disc">
                  <li className="ml-11 text-[1.2rem]">
                    {a.envanter_adi}: {a.envanter_adet}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="font-semibold text-[1.5rem] ml-4">
              İş Birliği Yapılan Kurumlar
            </div>
            <div>
              {kurumData.map((a, index) => (
                <ul key={index} className="list-disc">
                  <li className="ml-11 text-[1.2rem]">
                    <a
                      className="underline text-[#000C5C]"
                      href={a.kurum_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {a.kurum_adi}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
