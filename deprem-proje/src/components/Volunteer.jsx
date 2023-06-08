import volunteer from "../images/volunteer.svg";
import { useHistory } from "react-router-dom";

export default function Volunteer() {
  const history = useHistory();

  function handleVolunteerContact() {
    setTimeout(() => history.push("/volunteer"));
  }
  return (
    <div className="flex items-end">
      <div className="flex flex-col justify-center bg-ozi rounded-lg">
        <button
          className="font-bold bg-volunteer py-3 mx-6 my-9 rounded-lg"
          onClick={handleVolunteerContact}
        >
          GÖNÜLLÜ OL
        </button>
        <img src={volunteer} />
      </div>
    </div>
  );
}
