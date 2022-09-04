import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'

const Item = ({title, URLimg, price}) => {
// export const Item = ({item}) => {
  return (
    <>
    <div className="cCard">
        
            <h3>{title}</h3>
            <img src={URLimg} />
            <h3>$ {price}</h3>
            {/* <ItemCount/> */}
        
    </div>
        
    </>
  )
}

export default Item