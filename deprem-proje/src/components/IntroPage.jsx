import Intro from "./Intro";
import NewHeader from "./newHeader";
import Volunteer from "./Volunteer";
import Kart from "./Kart";

export default function IntroPage() {
  return (
    <div className="flex justify-center items-center h-auto rounded-[40px] bg-[#D9E8E7]">
      <div className="flex bg-white rounded-[40px] my-5 mx-5 ">
        <div className="flex-1 flex flex-col justify-between">
          <NewHeader />
        </div>
        <div className="flex-2 m-10 rounded-lg flex flex-col gap-10">
          <Intro />
          <div className="flex justify-between">
            {localStorage.getItem("token") !== null ? "" : <Kart />}
            {localStorage.getItem("token") !== null ? "" : <Volunteer />}
          </div>
        </div>
      </div>
    </div>
  );
}
