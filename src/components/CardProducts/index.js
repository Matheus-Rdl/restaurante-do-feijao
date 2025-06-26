import "./CardProducts.css";
import { IoMdImages } from "react-icons/io";

const CardProducts = ({ title, price, onToggle, checked }) => {
  //Função que é chamada sempre que o checkbox é clicado
  const handleChange = (e) => {
    //Manda para o NewOrders.jsx o item que foi marcado ou desmarcado
    onToggle({ title, price, selected: e.target.checked });
  };
  return (
    <div className="div-cardproduct">
      <div className="img">
        <IoMdImages />
      </div>
      <div className="content-cardproduct">
        <div>
          <p>{title}</p>
          <p>R$ {price}</p>
        </div>
        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};

export default CardProducts;
