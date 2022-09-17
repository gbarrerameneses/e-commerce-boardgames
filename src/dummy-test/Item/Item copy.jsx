import React from 'react'
import './Item.css'
// import ItemCount from '../ItemCount/ItemCount'

const Item = ({title, URLimg, price}) => {
// export const Item = ({item}) => {
  return (
    <section>
      <div className="cCard">
          <h3>{title}</h3>
          <img src={URLimg} />
          <h3>$ {price}</h3>
          {/* <ItemCount /> */}
      </div>
    </section>
  )
}

export default Item