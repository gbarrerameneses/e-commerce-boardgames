import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
  const onAdd = (iValue) => {
      console.log(`El valor elegido es ${iValue}`);
  }

  return (
    <div>
      


      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>

  )
}

export default ItemListContainer