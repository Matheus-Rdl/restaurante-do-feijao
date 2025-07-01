import "./CardOrdersReleased.css";
import { MdTableBar, MdPerson } from "react-icons/md";

const CardOrdersReleased = (props) => {
  return (
    <div className="div-CardOrdersReleased">
      <div className="div-TableContent">
        <div>
          <MdTableBar />
          <p>
            Mesa: <strong>{props.table}</strong>
          </p>
        </div>
        <div>
          <MdPerson />
          <p>
            Pessoas: <strong>{props.quantify}</strong>
          </p>
        </div>
      </div>
      <div className="div-TableAccount">
        <p>Total a pagar: {props.account}</p>
      </div>
    </div>
  );
};

export default CardOrdersReleased;
