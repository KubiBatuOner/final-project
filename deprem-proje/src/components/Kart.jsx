import tarde_logo from "../images/tarde_logo.svg";
import person from "../images/person.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Kart() {
  const [hizmetData, setHizmetData] = useState([]);

  const kisiler = [];

  hizmetData.map((item) => kisiler.push(item.erisilen_kisi_sayisi));
  console.log(kisiler);
  const toplam = kisiler.reduce((a, b) => a + b, 0);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/hizmet")
      .then((res) => setHizmetData(res.data));
  }, []);
  return (
    <div className="flex items-end">
      <div className="flex bg-white rounded shadow-[0_0_30px_rgba(0,0,0,0.1)] mb-3 justify-between w-[25vw] h-[30vh] px-6">
        <div className="flex items-center justify-center">
          <img src={tarde_logo} className="w-52" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl">Ulaşılan Kişi Sayısı</p>
          <div className="flex mt-6 justify-evenly w-[5vw] items-start">
            <div className="flex gap-3 text-xl font-semibold ">
              <img src={person} className="w-[1.5vw]" />
              <div className="flex gap-1">
                <p className="">{toplam}</p>
                <p className=""> Kişi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
