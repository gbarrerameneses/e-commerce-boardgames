import React from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'
import Users from '../assets/icons/users.svg'

const ItemDetail = ({boardgames}) => {

  const { stock, title, img, description, price, author, players, brand } = boardgames
  const { addToCart, totalCanasta } = useCart();

  const onAdd =(count) => {
    addToCart(boardgames, count)
    totalCanasta()
  }



  return (
    <>
    
      <div className='container my-5'>
        {/* <div className='d-flex justify-content-around align-items-center mt-5 flex-wrap'> */}
        <div className='row'>
          <div className='px-2 col-md-6 my-2'>
            <img src={img} alt={img} className="img-fluid"/>
          </div>
          <div className='px-2 col-md-6 my-2'>
          <h5>Del creador: {author}</h5>
          <p>Marca: {brand}</p>
            <h2>{title}</h2>
            <h6 style={{ color: 'var(--bs-primary)' }}>Descripción del producto:</h6>
            <p className='fw-lighter'>{description}</p>
            <p>Número de jugadores: {players} <img src={Users} alt="" style={{ width: '20px' }}/></p>
            <p className='fw-lighter'>Precio:<strong> <code>$</code> {price}</strong></p>
            
            {/* <p>Juegos de mesa disponibles: {stock}</p> */}
            <ItemCount stock={stock} initial={0} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail