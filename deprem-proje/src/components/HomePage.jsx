import Map from "./Map";
import NewHeader from "./newHeader";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-auto m-5 rounded-[40px] bg-[#D9E8E7]">
      <div className="flex bg-white h-full w-full rounded-[40px] my-5 mx-5 ">
        <div className="flex-1 justify-between items-start">
          <NewHeader />
        </div>
        <div className="flex-2 m-10 p-10 rounded-lg bg-[#F8EFE4]">
          <Map />
        </div>
      </div>
    </div>
  );
}
