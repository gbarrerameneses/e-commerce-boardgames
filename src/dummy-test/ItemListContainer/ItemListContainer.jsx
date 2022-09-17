import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import  Item  from '../Item/Item'



  const ItemListContainer = ({items}) => {


  const onAdd = (iValue) => {
      console.log(`El valor elegido es ${iValue}`)
      // alert(`El valor elegido es ${iValue}`)
  }

  return (
    <main>
      
      <section>
      {items?.length ? (
        items.map((item) => <Item key={item.id} {...item} />)
      ) : (
        <h2>Cargando...</h2>
      )}
          {/* // items.map((item) => <item key={item.id} {...item}/>) */}
         
      </section>
      
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>

</main>
      

  )
}

export default ItemListContainer