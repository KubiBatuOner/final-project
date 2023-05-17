import { ReactComponent as Harita } from "../images/vector-mapcraft-biz.svg";
import "../index.css";

export default function Map() {
  return (
    <div>
      <div className="flex justify-center">
        <Harita></Harita>
      </div>
    </div>
  );
}
