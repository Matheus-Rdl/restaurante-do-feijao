import { Link } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import "../css/Orders.css";
import { useState } from "react";
import NavSideBar from "../components/NavSideBar";
import Header from "../components/Header";
import { IoMdCloseCircle } from "react-icons/io";
import ModalScreen from "../components/ModalScreen";

const Orders = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <NavSideBar />
      <Header />
      <div className="main div-orders">
        <p className="title-orders">Pedidos</p>
        <div onClick={() => setShowModal(true)}>
          <CardMenu title="Novo Pedido"></CardMenu>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <div
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
              >
                <IoMdCloseCircle />
              </div>
              <ModalScreen 
                screen="new-order"
              />
            </div>
          </div>
        )}
        <p className="title-orders">Lançamentos</p>
        <div>
          <Link to={"/orders-released"}>
            <CardMenu title="Salão" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
