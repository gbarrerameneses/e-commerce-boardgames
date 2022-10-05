import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { CartView } from './CartView'
import { Form } from '../components/Form'

// import Item from './Item'


export const Cart = () => {

  const { cart, removeAll, totalPrice } = useCart()

  return (
    <>
      <div className='container'>
        { 
          cart?.length === 0 ?
          <div className='text-center mt-5'>
            <p> Tu canasta se encuentra vacía </p>
            <div className='mt-5'>
              <Link to={'/'}>
                <button className='btn btn-dark'>Da click aquí para ver más juegos</button>
              </Link>
            </div>
            <div className='mt-5'>
            <p> O revisa el status de tu órden </p>
              <Link to={'/order-status'}>
                <button className='btn btn-dark'>Da click aquí para ver tus órdenes</button>
              </Link>
            </div>
          </div>
          :
          <div>
            {
              cart.map((item, i) => <CartView key={item.id} {...item} count={cart[i].count} id={item.id} />)
            }
            <div className='d-flex justify-content-between flex-wrap mt-5'>
              
              <div className='mt-2'>
                <p>El monto total de tu canasta es de: $ {totalPrice()}</p>
              </div>
              <div className='mt-2'>
                <button onClick={removeAll} className='btn btn-dark'>Eliminar canasta</button>
              </div>
            </div>
            <div>
              <Form/>
            </div>
          </div>
        }
      </div>
    </>
  )
}