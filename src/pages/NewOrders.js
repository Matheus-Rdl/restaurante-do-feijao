import { useState } from "react";
import CardProducts from "../components/CardProducts";
import CardSideBarProducts from "../components/CardSideBarProducts";
import Header from "../components/Header";
import "../css/NewOrders.css";
import { useLocation } from "react-router-dom";

const NewOrders = () => {
  const location = useLocation();
  const { table, numPeople } = location.state || {};

  const [people, setPeople] = useState(numPeople);

  const [screenProducts, setScreenProducts] = useState("Principais");
  const [selectedItems, setSelectedItems] = useState([]);

  //Altera de tela em tela dos produtos quando clica em um item
  const handleSelect = (products) => {
    setScreenProducts(products);
  };

  //Função que adiciona ou remove um item da lista
  const handleToggleProduct = (product) => {
    if (product.selected) {
      // Adiciona o produto se ele ainda não estiver na lista
      setSelectedItems((prev) => {
        const exists = prev.find((p) => p.title === product.title);
        return exists ? prev : [...prev, product];
      });
    } else {
      // Remove da lista se foi desmarcado
      setSelectedItems((prev) => prev.filter((p) => p.title !== product.title));
    }
  };

  // Função para saber se o produto está selecionado
  const isChecked = (title) =>
    selectedItems.some((item) => item.title === title);

  return (
    <>
      <Header />

      {/*Lista que mostra os produtos selecionados */}
      <div className="nav-cart">
        <div>
          <h3>Produtos Selecionados:</h3>
          <ul>
            {selectedItems.length === 0 && <p>Nenhum item selecionado.</p>}
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.title}
                <br />
                <strong>R$ {item.price}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="btn-cart">
          <button>Lançar pedidos</button>
          <button>Ver lançamentos</button>
        </div>
      </div>

      {/*Adiciona o meu lateral esquedo para a categoria dos produtos*/}
      <div className="nav-products">
        {["Principais", "Bebidas", "Sobremesas", "Adicionais", "Outros"].map(
          (item) => (
            <CardSideBarProducts
              key={item}
              title={item}
              onClick={() => handleSelect(item)}
            />
          )
        )}
      </div>

      {/*Função que mostra os produtos de acordo com o filtro*/}
      <div className="main div-newOrder">
        <p className="title-newOrder">Novo Pedido</p>
        <div>
          <p>Mesa: {table}</p>
          <p>
            Quantidade de pessoas: {people}
            {/*<input value={people} onChange={(e) => setPeople(e.target.value)} ></input>*/}
          </p>
        </div>
        <div>
          {screenProducts === "Principais" && (
            <div className="products-newOrder">
              <CardProducts
                title="Bife a Role"
                price="25.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Bife a Role")}
              />
              <CardProducts
                title="Frango Assado"
                price="20.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Frango Assado")}
              />
              <CardProducts
                title="Filé de Frango Grelhado"
                price="20.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Filé de Frango Grelhado")}
              />
              <CardProducts
                title="Filé de Peixe"
                price="30.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Filé de Peixe")}
              />
              <CardProducts
                title="Costela Cozida"
                price="20.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Costela Cozida")}
              />
              <CardProducts
                title="Picadinho"
                price="20.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Picadinho")}
              />
              <CardProducts
                title="Calabresa Acebolada"
                price="20.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Calabresa Acebolada")}
              />
              <CardProducts
                title="Parmegiana de Carne"
                price="40.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Parmegiana de Carne")}
              />
              <CardProducts
                title="Parmegiana de Frango"
                price="35.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Parmegiana de Frango")}
              />
              <CardProducts
                title="Contra Filé com Fritas"
                price="40.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Contra Filé com Fritas")}
              />
              <CardProducts
                title="Bisteca"
                price="20.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Bisteca")}
              />
            </div>
          )}

          {screenProducts === "Bebidas" && (
            <div className="products-newOrder">
              <CardProducts
                title="Água S/ Gás"
                price="5.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Água S/ Gás")}
              />
              <CardProducts
                title="Água C/ Gás"
                price="7.00"
                onToggle={handleToggleProduct}
                checked={isChecked("Água C/ Gás")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewOrders;
