import { Link } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import "../css/Orders.css";
import { useState } from "react";
import NavSideBar from "../components/NavSideBar";
import Header from "../components/Header";

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [table, setTable] = useState();
  const [numPeople, setNumPeople] = useState();

  const handleChangeTable = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setTable(onlyNums);
  };

  const handleChangeNumPeople = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setNumPeople(onlyNums);
  };

  return (
    <>
      <NavSideBar />
      <Header/>
      <div className="main div-orders">
        <p className="title-orders">Pedidos</p>
        <div onClick={() => setShowModal(true)}>
          <CardMenu title="Novo Pedido" />
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <p>ID Pedido: </p>
              <form className="modal-questions">
                <div>
                  <label>Mesa:</label>
                  <input
                    type="text"
                    value={table}
                    onChange={handleChangeTable}
                    required
                  />
                </div>

                <div>
                  <label>Quantas pessoas:</label>
                  <input
                    type="text"
                    value={numPeople}
                    onChange={handleChangeNumPeople}
                    required
                  />
                </div>

                <div className="btn-group">
                  <Link
                    to={"/new-order"}
                    state={{
                      table: table,
                      numPeople: numPeople,
                    }}
                  >
                    <button className="btn btn-finish">Continuar</button>
                  </Link>
                </div>
              </form>
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
