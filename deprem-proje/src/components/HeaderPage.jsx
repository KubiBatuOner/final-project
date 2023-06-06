import Map from "./Map";
import NewHeader from "./newHeader";

export default function HeaderPage() {
  return (
    <div className="flex justify-center items-center h-auto rounded-[40px] bg-[#D9E8E7]">
      <div className="flex bg-white w-full rounded-[40px] my-5 mx-5 ">
        <div className="flex-1 flex flex-col justify-between ">
          <NewHeader />
        </div>
        <div className="flex-2 mt-10 mr-10 px-5 mb-3 rounded-lg bg-[url('mapZone.png')] bg-intro">
          <Map />
        </div>
      </div>
    </div>
  );
}
