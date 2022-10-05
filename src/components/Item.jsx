import React from 'react'
import { Link }from 'react-router-dom'


const Item = ({title, img, price, id, brand}) => {
  return (
    <>
    
      <div className="mt-3">
        <div className="card d-flex" style={{ width: "15rem" }}>
          <img src={img} className="card-img-top" alt={img} style={{ width: "auto", maxHeight: "250px", objectFit: "contain" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Marca: {brand} </p>
            <p className="card-text"><sup><strong><code>$</code></strong></sup> {price}</p>
            <Link className="btn btn-dark" to={`/detail/${id}`}>
              Más Detalles
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-3">
        <div className="card d-flex" style={{ width: "12rem" }}>
          <img src={img} className="card-img-top" alt={img} style={{ width: "12rem" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">$ {price}</p>
            <Link className="btn btn-dark" to={`/detail/${id}`}>
              Más Detalles
            </Link>
          </div>
        </div>
      </div> */}

      {/* <div>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <p>$ {price}</p>
        </div>
        <button >
          <Link to={`/detail/${id}`}>
              Más Detalles
          </Link>
        </button>
    </div> */}
    </>
  );
}

export default Item