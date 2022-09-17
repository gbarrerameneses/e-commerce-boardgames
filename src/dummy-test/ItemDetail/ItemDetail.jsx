import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item: { title, URLimg, price, description, category } }) => {
  return (
    <div>
      <div><strong>Título:</strong><i>{title}</i></div>
      <img src={URLimg} alt="" />
      <div><strong>$</strong> {price}</div>
      <div><strong>Categoría: </strong>  {category}</div>
      <div> {description}</div>
      <button>
        <Link to={`/boardgames`}>Volver</Link>
      </button>
    </div>
  );
};

export default ItemDetail;
