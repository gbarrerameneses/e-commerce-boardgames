import React from 'react'
import { useCart } from '../context/CartContext'

export const CartView = ({title, img, price, id}) => {

    const { removeOne } = useCart()

    const eventDelete = (id) => {
        removeOne(id);
    }

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Juego</th>
            <th scope='col'>Imagen</th>
            <th scope='col'>Costo</th>
            <th scope='col'>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'></th>
            <td>{title}</td>
            <td><img src={img} alt="" className='img-thumbnail' style={{ width: '50px' }} /></td>
            <td>$ {price}</td>
            <td><button onClick={() => eventDelete(id)} className='btn btn-outline-danger'>Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

