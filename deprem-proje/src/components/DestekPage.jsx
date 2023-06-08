import Destek from "./Destek";
import NewHeader from "./newHeader";

export default function DestekPage() {
  return (
    <div className="flex justify-center items-center h-auto rounded-[40px] bg-[#D9E8E7]">
      <div className="flex bg-white rounded-[40px] my-5 mx-5 ">
        <div className="flex-1 flex flex-col gap-10">
          <NewHeader />
        </div>
        <div className="flex-2 rounded-lg flex flex-col gap-10 bg-hakkinda pt-5 px-8">
          <Destek />
        </div>
      </div>
    </div>
  );
}
