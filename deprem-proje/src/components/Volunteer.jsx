import volunteer from "../images/volunteer.svg";

export default function Volunteer() {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col justify-center bg-ozi rounded-lg">
        <button className="font-bold bg-volunteer py-3 mx-6 my-9 rounded-lg">
          GÖNÜLLÜ OL
        </button>
        <img src={volunteer} />
      </div>
    </div>
  );
}
