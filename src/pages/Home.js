import React, { useState } from "react";
import "../css/Home.css"; // Arquivo CSS separado

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleYes = () => {
    setShowModal(false);
    console.log("Clicou SIM");
  };

  const handleNo = () => {
    setShowModal(false);
    console.log("Clicou NÃO");
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="btn">
        Abrir Modal
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>Tem certeza?</p>
            <div className="btn-group">
              <button onClick={handleYes} className="btn btn-yes">
                Sim
              </button>
              <button onClick={handleNo} className="btn btn-no">
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
