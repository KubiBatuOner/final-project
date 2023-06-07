import { ReactComponent as Map } from "../../images/svgHatay.svg";
import Hatay from "../Sehirler/Hatay";
import NewHeader from "../newHeader";
import { useEffect } from "react";

export default function HatayPage() {
  useEffect(() => {
    let label1 = document.querySelector("#sanliurfa");
    let label2 = document.querySelector("#gaziantep");
    let label3 = document.querySelector("#kilis");
    let label4 = document.querySelector("#osmaniye");
    let label5 = document.querySelector("#adana");
    let label6 = document.querySelector("#kahramanmaras");
    let label7 = document.querySelector("#adiyaman");
    let label8 = document.querySelector("#malatya");
    let label9 = document.querySelector("#hatay");
    let label10 = document.querySelector("#diyarbakir");
    addLabelText(label1, "Şanlıurfa");
    addLabelText(label2, "Gaziantep");
    addLabelText(label3, "Kilis");
    addLabelText(label4, "Osmaniye");
    addLabelText(label5, "Adana");
    addLabelText(label6, "Kahramanmaraş");
    addLabelText(label7, "Adıyaman");
    addLabelText(label8, "Malatya");
    addLabelText(label9, "Hatay");
    addLabelText(label10, "Diyarbakır");
    function addLabelText(bgPath, labelText) {
      let bbox = bgPath.getBBox();
      let x = bbox.x + bbox.width / 2.2;
      let y = bbox.y + bbox.height / 1.7;
      let textElem = document.createElementNS(bgPath.namespaceURI, "text");
      textElem.setAttribute("x", x);
      textElem.setAttribute("y", y);
      textElem.setAttribute("text-anchor", "middle");
      textElem.classList.add("label-text");
      textElem.textContent = labelText;
      bgPath.after(textElem);
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-auto rounded-[40px] bg-[#D9E8E7]">
      <div className="flex bg-white w-full rounded-[40px] my-5 mx-5 ">
        <div className="flex-1 flex flex-col justify-between ">
          <NewHeader />
        </div>
        <div className="flex-2 flex flex-col mt-10 mr-10 px-5 mb-3 rounded-lg bg-[url('mapZone.png')] bg-intro">
          <div className="flex justify-center w-[50vw]">
            <Map />
          </div>
          <div className="flex justify-end">
            <div className="w-[40%] mb-5">
              <Hatay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
