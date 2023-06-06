import { useEffect, useState } from "react";
import axios from "axios";

export default function Hatay() {
  const [merkezData, setMerkezData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);

  const envanterler = [];

  envanterData.map((e) => envanterler.push(e.envanter_adet));
  console.log(envanterler);
  const envanterToplam = envanterler.reduce((c, d) => c + d, 0);

  const sehir = "Hatay";

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
          <div className="mb-8 font-bold text-[#000C5C] text-[24px] leading-[28.13px]">
            {sehir.toLocaleUpperCase("tr-TR")}
          </div>
          <div className="mt-5">
            {merkezData.map((a, index) => (
              <ul key={index} className="list-image-[url(yuvarlak.svg)]">
                <li className="ml-11 text-[1.3rem] font-medium text-[#000C5C]">
                  {a.merkez_isim}
                </li>
              </ul>
            ))}
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-[1.6rem] ml-4">Araç Sayısı</h3>
            <div>
              <ul className="list-disc">
                <li className="ml-11 text-[1.3rem]">{envanterToplam}</li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <div className="font-semibold text-[1.6rem] ml-4">
              İş Birliği Yapılan Kurumlar
            </div>
            <div>
              {kurumData.map((a, index) => (
                <ul key={index} className="list-disc">
                  <li className="ml-11 text-[1.3rem]">
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
