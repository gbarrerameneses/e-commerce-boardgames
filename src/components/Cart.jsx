import React from 'react'
import { useCart } from '../context/CartContext'
import Item from './Item'


export const Cart = () => {

  const { cart } = useCart()

  return (
    <>
    <div>
        Mí Canasta
      </div>
      {
        cart.map( item => <Item key={item.id} {...item}  />)
      }
    </>
  )
}

