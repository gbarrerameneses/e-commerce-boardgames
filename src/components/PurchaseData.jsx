import React from 'react';

const PurchaseData = ({ buyer, date, finalPrice, items }) => {


  return (
    <>
      <div className="mt-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item mt-5">
            <h3>Información de contacto</h3>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                Ver información
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <p>
                  <span>
                    <code>Titular de la órden: </code>
                  </span>
                  {buyer.name}
                </p>
                <p>
                  <span>
                    <code>Correo electrónnico: </code>
                  </span>
                  {buyer.email}
                </p>
                <p>
                  <span>
                    <code>Número telefónico: </code>
                  </span>
                  {buyer.phone}
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item mt-5">
            <h3>Detalle de la orden</h3>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
                Ver información
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                {items.map((boardgame) => (
                  <div key={boardgame.id}>
                    <div>
                      <p><span><code>Juego de mesa: </code></span>{boardgame.title}</p>
                      <p><span><code>id: </code></span>{boardgame.id}</p>
                      <p><span><code>Precio: $ </code></span>{boardgame.price}</p>
                      <p><span><code>Fecha de la órden: </code></span>{date}</p>
                      <p><span><code>Monto total de la órden: $ </code></span>{finalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default PurchaseData