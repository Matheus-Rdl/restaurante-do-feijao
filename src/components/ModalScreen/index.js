import "./ModalScreen.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ModalScreen = (props) => {

   const productsExample = [
    {
      key: "0001",
      name: "Parmegiana",
      price: 45.66,
    },
    {
      key: "0002",
      name: "Feijoada",
      price: 60.00,
    },
    {
      key: "0003",
      name: "Contra filé com fritas",
      price: 30.00,
    },
    {
      key: "0004",
      name: "Filé de peixe a parmegiana",
      price: 70,
    },
    {
      key: "0005",
      name: "Filé de frango",
      price: 20,
    },
        {
      key: "0006",
      name: "Parmegiana",
      price: 45.66,
    },
    {
      key: "0007",
      name: "Feijoada",
      price: 60.00,
    },
    {
      key: "0008",
      name: "Contra filé com fritas",
      price: 30.00,
    },
    {
      key: "0009",
      name: "Filé de peixe a parmegiana",
      price: 70,
    },
    {
      key: "0010",
      name: "Filé de frango",
      price: 20,
    },
  ];

  console.log(props.screen === "new-order");
  console.log(props.screen === "view-order-table");

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
      {props.screen === "new-order" && (
        <div>
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
      )}

      {props.screen === "view-order-table" && (
        <div>
          <p>Detalhes do pedido</p>
          <div className="modal-table">
            <div className="information">
              <p>Mesa: </p>
              <p>Pessoas: </p>
              <p>Conta: </p>
            </div>
            <div>
              <p>Pedidos lançados</p>
              <ul className="list">
                {productsExample.map((products) => (
                  <li key={products.name}>
                    <p>{products.name} - <strong>R$ {products.price}</strong></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalScreen;
