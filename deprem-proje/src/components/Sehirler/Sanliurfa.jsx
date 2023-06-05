import { useEffect, useState } from "react";
import axios from "axios";

export default function Sanliurfa() {
  const [personelData, setPersonelData] = useState([]);
  const [merkezData, setMerkezData] = useState([]);
  const [envanterData, setEnvanterData] = useState([]);
  const [kurumData, setKurumData] = useState([]);
  const [hizmetData, setHizmetData] = useState([]);

  const kisiler = [];
  const envanterler = [];

  hizmetData.map((item) => kisiler.push(item.erisilen_kisi_sayisi));
  console.log(kisiler);
  const toplam = kisiler.reduce((a, b) => a + b, 0);

  envanterData.map((e) => envanterler.push(e.envanter_adet));
  console.log(envanterler);
  const envanterToplam = envanterler.reduce((c, d) => c + d, 0);

  const sehir = "Şanlıurfa";

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/personel")
      .then((res) =>
        setPersonelData(res.data?.filter((e) => e.sehir_isim == sehir))
      );
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
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) =>
        setHizmetData(res.data?.filter((e) => e.sehir_isim == sehir))
      );
  }, []);

  return (
    <div className="flex flex-col justify-center rounded-2xl p-5">
      <div>
        <div>
          <div className="mb-8 font-bold text-[#000C5C] text-[3.5rem] leading-[4.5rem]">
            {sehir.toLocaleUpperCase("tr-TR")}
          </div>
          <div className="mt-5 border-t-2">
            <h3 className="font-semibold text-[1.6rem] ml-4 h-auto">
              Personel Adı Soyadı
            </h3>
            {personelData.map((a, index) => (
              <ul key={index} className="list-disc">
                <li className="ml-11 text-[1.3rem]">
                  {a.isim} {a.soyisim}
                </li>
              </ul>
            ))}
          </div>
          <div className="mt-5 border-t-2">
            <h3 className="font-semibold text-[1.6rem] ml-4">Merkezlerimiz</h3>
            <div>
              {merkezData.map((a, index) => (
                <ul key={index} className="list-disc">
                  <li className="ml-11 text-[1.3rem]">{a.merkez_isim}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-5 border-t-2">
            <h3 className="font-semibold text-[1.6rem] ml-4">
              Merkez Telefon Numaraları
            </h3>
            <div>
              {merkezData.map((a, index) => (
                <ul key={index} className="list-disc">
                  <li className="ml-11 text-[1.3rem]">{a.merkez_telefon1}</li>
                  <li className="ml-11 text-[1.3rem]">{a.merkez_telefon2}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-5 border-t-2">
            <h3 className="font-semibold text-[1.6rem] ml-4">Araç Sayısı</h3>
            <div>
              <ul className="list-disc">
                <li className="ml-11 text-[1.3rem]">{envanterToplam}</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 border-t-2">
            <div className="font-semibold text-[1.6rem] ml-4">
              İş Birliği Yapılan Kurumlar
            </div>
            <div>
              {kurumData.map((a, index) => (
                <ul key={index} className="list-disc">
                  <li className="ml-11 text-[1.3rem]">{a.kurum_adi}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-5 border-t-2 pb-4">
            <div className="font-semibold text-[1.6rem] ml-4">
              Ulaşılan Kişi Sayısı
            </div>
            <div>
              <ul className="list-disc">
                <li className="ml-11 text-[1.3rem]">{toplam}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
