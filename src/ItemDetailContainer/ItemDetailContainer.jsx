import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../productsData'

// const product = {
//     name: 'iPone',
//     price: 1200
// }

const ItemDetailContainer = () => {

const [item, setItem] = useState({})
const {slug} = useParams()

useEffect(() => {
    getItem()
    .then( data => {
        // console.log(slug);
        if(data){
            setItem(data)
        }
    })
}, [])

//getItem con Promise
const getItem = () => { 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( products.find( product => product.slug == slug) )
        }, 2000)
    })
 }
//getItem con fetch

  return (
    <>
    {/* <div>ItemDetailContainer</div> */}
    <ItemDetail item={item}/>
    </>
    
  )
}

export default ItemDetailContainer