import tarde from "../images/tarde2.jpg";
import { useHistory } from "react-router-dom";
export default function Entrance() {
  const history = useHistory();
  return (
    <div>
      <div className="pt-[5vh] pb-[5vh] flex justify-between items-center">
        <div className="w-[12vw] ">
          <img src={tarde} className="mx-auto flex " />
        </div>
        <div>
          <h2 className="font-bold text-[#019EC9] text-[4.5rem] leading-[4.5rem] mt-8 text-center">
            TARDE
          </h2>
        </div>
        <div className="flex justify-end">
          <button className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019EC9] border-4 hover:bg-[#019EC9] hover:text-white">
            Yönetici Girişi
          </button>
        </div>
      </div>
      <div className="pt-[5vh] pb-[5vh] gap-3 flex justify-center">
        <button className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019EC9] border-4 hover:bg-[#019EC9] hover:text-white">
          Bireysel Destek
        </button>
        <button
          className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019EC9] border-4 hover:bg-[#019EC9] hover:text-white"
          onClick={() => history.push("/STK")}
        >
          STK Destek
        </button>
      </div>
    </div>
  );
}
