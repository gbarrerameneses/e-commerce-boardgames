import React from 'react'
import { useCart } from '../context/CartContext';
// import CartClase from './CartClase';


export const CartView = ({title, img, description, price, id}) => {

    const { removeOne } = useCart()

    const eventDelete = (id) => {
        removeOne(id);
    }

  return (
    <>
    <div>CartView</div>
    <img src={img} alt="" />
    <h2>{title}</h2>
    <h3>{description}</h3>
    <p>$ {price}</p>
    <button onClick={()=> eventDelete(id) }>Eliminar</button>
    {/* <CartClase/> */}
    </>

  )
}

