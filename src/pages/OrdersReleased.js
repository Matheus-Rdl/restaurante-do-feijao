import { useState } from "react";
import CardOrdersReleased from "../components/CardOrdersReleased";
import Header from "../components/Header";
import NavSideBar from "../components/NavSideBar";
import "../css/OrdersReleased.css";

const OrdersReleased = () => {
  const [showModal, setShowModal] = useState(false);

  const tables = [
    {
      id: "0001",
      table: "1",
      numPeople: "46",
      account: 45.66,
    },
    {
      id: "0002",
      table: "2",
      numPeople: "86",
      account: 20.0,
    },
    {
      id: "0003",
      table: "3",
      numPeople: "66",
      account: 25.66,
    },
    {
      id: "0004",
      table: "4",
      numPeople: "79",
      account: 145.66,
    },
    {
      id: "0005",
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
              <CardOrdersReleased
                onClick={() => setShowModal(true)}
                key={tables.id}
                table={tables.table}
                quantify={tables.numPeople}
                account={tables.account}
              />
            ))}
          </div>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <p>ID Pedido: </p>
              <form className="modal-questions">
                <div>
                  
                </div>

                <div>
                  <label>Quantas pessoas:</label>
                 
                </div>

                <div className="btn-group">
               
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersReleased;
