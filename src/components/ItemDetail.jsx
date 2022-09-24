import React from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'

const ItemDetail = ({boardgames}) => {

  const { stock, title, img, description, price, } = boardgames
  const {addToCart} = useCart();

  const onAdd =(count) => {
    addToCart(boardgames, count)
  }



  return (
    <>
    <div>ItemDetail</div>
    <div>
      <img src={img} alt="" />
    </div>
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>$ {price}</p>
      <ItemCount stock={stock} initial={0} onAdd={onAdd} />
    </div>
    </>
  )
}

export default ItemDetail