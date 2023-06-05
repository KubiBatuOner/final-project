import Map from "./Map";
import Volunteer from "./Volunteer";
import NewHeader from "./newHeader";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-auto rounded-[40px] bg-[#D9E8E7]">
      <div className="flex bg-white w-full rounded-[40px] my-5 mx-5 ">
        <div className="flex-1 flex flex-col justify-between">
          <NewHeader />
        </div>
        <div className="flex-2 mt-10 mx-10 mb-3 rounded-lg bg-intro">
          <Map />
          {localStorage.getItem("token") !== null ? "" : <Volunteer />}
        </div>
      </div>
    </div>
  );
}
