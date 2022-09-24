import Cart from '../assets/icons/addToCart.svg'
import { useCart } from '../context/CartContext'

export const CartWidget = () => {

  const { totalCanasta } = useCart();

  return (
    <>
    <div>
        <img src={Cart} alt="" />
        <p>{totalCanasta()}</p>
    </div>
    </>
  )
}