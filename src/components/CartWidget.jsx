import Cart from '../assets/icons/cart.svg'
import { useCart } from '../context/CartContext'

export const CartWidget = () => {

  const { totalCanasta } = useCart();

  return (
    <>
    <div className='d-flex'>
        <img src={Cart} alt="" style={{ width: '30px' }} />
        <p className='countBasket'>{totalCanasta()}</p>
    </div>
    </>
  )
}