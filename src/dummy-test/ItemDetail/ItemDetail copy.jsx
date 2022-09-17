import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import apiJSON from '../apiJSON.json'
// import Item from '../Item/Item'

const ItemDetail = () => {
    // const params = useParams()
    // console.log(params);

    const { id } = useParams()
    console.log('params id: ' + id)

    useEffect(()=>{
        const URL = 'https://rickandmortyapi.com/api/character/' + id
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })

    },[])

      
    

  return (
    <>
    <section>
        <h1>Vista de Detalle</h1>
     {/* <Item key={item.id} {...item} />) */}
        {/* // items.map((item) => <item key={item.id} {...item}/>) */}
       
    </section>
    </>
  )
}

export default ItemDetail
// ====================================================
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import Detalle from './Detalle'

// const ItemDetalle = () => {

//     const [prods, setProds] = useState([])
//     const { codigo } = useParams()

  
//     useEffect(() => {
//       //Traigo los datos del archivo Json
//     //  fetch('http://localhost:3000/productos.json' )
//     fetch('/productos.json' )
//         .then( resp => resp.json() )
//         .then( datos => {
//          setTimeout(() => {
//             setProds(datos)
//           }, 2000);
//         })
//         .catch(error => console.error("Se produjo un error: " + error));
//     }, [])
    

//       return (
//         <>
        
//           <div className="container"> 
//           <br></br>   
//           <div><strong>Detalle del Producto</strong></div>
//           <Detalle prods={prods.filter((p) => p.codigo === codigo )}/> 
//           <br></br>  <br></br> 
//           </div>
//         </>
//       )
//     }

//     export default ItemDetalle

 // const [items, setItems] = useState([])

    // const getItems = (data, time) => 
    // new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject('Error')
    //         }
    //     }, time)
    // })

    // useEffect(()=>{
    //     getItems(`apiJSON ${id}`, 3000)
    //     .then((resolve) => {
    //         setItems(resolve)
    //     }).catch((err) => console.log(err, ": No hay data"))
    // },[])