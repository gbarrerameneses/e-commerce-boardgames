import React from 'react'
import { Link }from 'react-router-dom'

const Item = ({title, img, price, id}) => {
  return (
    <div>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <p>$ {price}</p>
        </div>
        <button >
          <Link to={`/detail/${id}`}>
              Más Detalles
          </Link>
        </button>
    </div>
  )
}

export default Item