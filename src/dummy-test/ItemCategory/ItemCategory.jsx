import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../productsData";



const ItemListContainerCategory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <>
    <div id="ItemListContainerCategory">
      
      {items.map((i) => (
        <Link to={`/boardgames/category/${i.id}`} key={i.id}>

          <div className="containerItem">
            {/* <div className='ItemListContainerCategory' >{i.title}</div> */}
            <div className="cCard">
              <h3>{i.title}</h3>
              <img src={i.URLimg} />
              <h3>$ {i.price}</h3>
              <button>Ver Detalle</button>
              
            </div>
          </div>
        </Link>
      ))}
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
    </div>
    </>
  );
};

export default ItemListContainerCategory;
