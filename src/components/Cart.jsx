import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { CartView } from './CartView';

// import Item from './Item'


export const Cart = () => {

  const { cart, removeAll, totalPrice } = useCart()

  return (
    <>
    <div>
        Mí Canasta
      </div>
      { 
        cart?.length === 0 ?
        <div>
          <p> Tu canasta se encuentra vacía </p>
          <Link to={'/'}>
            <button>Da click para ver más juegos</button>
          </Link>
        </div>
        :
        <div>
          {
            cart.map((item, i) => <CartView key={item.id} {...item} count={cart[i].count} id={item.id} />)
          }
          <div>
            <button onClick={removeAll}>Eliminar canasta</button>
            <div>
              <p>El monto total de tu canasta es de: ${totalPrice()}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}


// import React from 'react'
// import { useCart } from '../context/CartContext'
// import Item from './Item'


// export const Cart = () => {

//   const { cart } = useCart()

//   return (
//     <>
//     <div>
//         Mí Canasta
//       </div>
//       {
//         cart.map( item => <Item key={item.id} {...item}  />)
//       }
//     </>
//   )
// }


