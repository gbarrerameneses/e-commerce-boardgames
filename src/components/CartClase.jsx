import React from 'react'
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore"

const CartClase = () => {

  const order = {
    buyer: {name: 'Carlos', phone:'5556584321', email:'carlos@gmail.com'},
    items: [{name:'mochila', price:700},{name:'cable hdmi', price:200},{name:'pilas AA', price:130} ],
    total: 1030
  }
  
  console.log(order);
  
  const orderHandler = () => {
    console.log('Finalizando compra');

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, order).then( ({id}) => {
      console.log({id});
    })
  }

  const getOrderHandler = () => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    getDocs( orderCollection ).then(res => {
      // console.log( res.docs.map( d => d.data()));
      console.log( res.docs.map( d => ({id: d.id, ...d.data()})));
    })
  }

  const updateOrderHandler = () => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    const orderDoc = doc(orderCollection, "9Xk3c5gO4X3e45AcoA1K")
    updateDoc( orderDoc, {
      price:222,
      buyer: { name: 'Carlos', phone: 55555, email: 'carlos@gmail.com' },
  }).then( res => { console.log('res: ' + res) } )

  }
  
  return (
    <>
    <div>CartClase</div>
    <button onClick={orderHandler}>Finalizar compra</button>
    <button onClick={getOrderHandler}>Consulta tu orden</button>
    <button onClick={updateOrderHandler}>Actualizar orden</button>
    
    </>
  )
}

export default CartClase