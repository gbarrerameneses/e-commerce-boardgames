import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

import products from "../productsData";
import "./ItemListContainerCategory.css";
// import ItemCount from '../ItemCount/ItemCount'


const ItemListContainerCategory = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
      const getProducts = 
      new Promise((resolve, rejected) => {
              setTimeout(() => {
                  products ? resolve(products) : rejected('error');
              }, 3000);
          });
      if(category){
          getProducts
          .then(res => setItems(res.filter(product => product.category === category)))
          .catch(err => console.log(err));
      }else{
          getProducts
          .then(res => setItems(res))
          .catch(err => console.log(err));
      }
  }, [category]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <>
    <div id="ItemListContainerCategory">
      
      {items.map((i) => (
        <Link to={`/boardgames/item/${i.slug}`} key={i.id}>
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
