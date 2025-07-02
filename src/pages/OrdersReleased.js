import { useState } from "react";
import CardOrdersReleased from "../components/CardOrdersReleased";
import Header from "../components/Header";
import NavSideBar from "../components/NavSideBar";
import "../css/OrdersReleased.css";
import { IoMdCloseCircle } from "react-icons/io";
import ModalScreen from "../components/ModalScreen";

const OrdersReleased = () => {
  const [showModal, setShowModal] = useState(false);

  const tables = [
    {
      key: "0001",
      table: "1",
      numPeople: "46",
      account: 45.66,
    },
    {
      key: "0002",
      table: "2",
      numPeople: "86",
      account: 20.0,
    },
    {
      key: "0003",
      table: "3",
      numPeople: "66",
      account: 25.66,
    },
    {
      key: "0004",
      table: "4",
      numPeople: "79",
      account: 145.66,
    },
    {
      key: "0005",
      table: "5",
      numPeople: "4",
      account: 245.66,
    },
  ];

  return (
    <>
      <NavSideBar />
      <Header />
      <div className="main divOrdersReleased">
        <p className="title-OrdersReleased">Pedidos Lançados</p>
        <div>
          <h2>Salão</h2>
          <div className="dataOrdersReleased">
            {tables.map((tables) => (
              <div onClick={() => setShowModal(true)}>
                <CardOrdersReleased
                  key={tables.key}
                  table={tables.table}
                  quantify={tables.numPeople}
                  account={tables.account}
                />
              </div>
            ))}
          </div>
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
              <ModalScreen screen="view-order-table" table={tables.table}/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersReleased;
