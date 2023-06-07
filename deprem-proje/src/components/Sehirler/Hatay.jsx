import { useEffect, useState } from "react";
import axios from "axios";
import iletisim from "../../images/iletisim.svg";

export default function Hatay() {
  const [merkezData, setMerkezData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);

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
          <div className="mb-8 ml-4 font-bold text-[#000C5C] text-[1.8rem] leading-[28.13px]">
            {sehir.toLocaleUpperCase("tr-TR")}
          </div>
          <div className="mt-5">
            <div className="bg-[#3C4058] flex flex-col justify-center p-5 gap-4 rounded">
              <h4 className="text-white flex justify-center items-center">
                MERKEZ TELEFON NUMARALARI
              </h4>
              {merkezData.map((a, index) => (
                <div
                  key={index}
                  className="text-[1.2rem] font-medium flex justify-center items-center gap-2 underline text-white"
                >
                  <img src={iletisim} className=" rounded" alt="Logo" />
                  <a href="tel:{a.merkez_telefon1}">{a.merkez_telefon1}</a>
                </div>
              ))}
              <p className="flex justify-center items-center text-white text-xs">
                7 GÜN 24 SAAT
              </p>
            </div>
          </div>
          <div className="mt-5">
            {merkezData.map((a, index) => (
              <ul key={index} className="list-image-[url(yuvarlak.svg)]">
                <li className="ml-10 text-[1.2rem] font-medium text-[#000C5C]">
                  {a.merkez_isim}
                </li>
              </ul>
            ))}
          </div>
          <div className="mt-5">
            <table className="ml-4">
              <thead>
                <tr className="bg-slate-100">
                  <th
                    scope="col"
                    className="pr-[52px] pl-3 py-2 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
                  >
                    <p className="font-bold">ARAÇ ADI</p>
                  </th>
                  <th
                    scope="col"
                    className="pr-[52px] pl-3 py-2 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
                  >
                    <p className="font-bold">ADET</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {envanterData.map((a, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-3 py-2 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800">
                      {a.envanter_adi}
                    </td>
                    <td className="px-3 py-2 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800">
                      {a.envanter_adet}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <table className="ml-4">
              <thead>
                <tr className="bg-slate-100">
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs border border-slate-200 font-medium text-gray-500 uppercase"
                  >
                    <p className="ml-1 font-bold">
                      İŞ BİRLİĞİ YAPILAN KURUMLAR
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {kurumData.map((a, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-3 py-2 border border-slate-200 whitespace-nowrap text-sm font-normal text-gray-800">
                      <a
                        className="underline ml-1 font-semibold text-[#000C5C]"
                        href={a.kurum_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {a.kurum_adi}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
