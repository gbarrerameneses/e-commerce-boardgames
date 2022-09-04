import React, { useEffect, useState } from 'react'
import apiJSON from '../apiJSON.json'
import ItemListContainer from './../ItemListContainer/ItemListContainer'

export const ItemContainer = () => {

    const [items, setItems] = useState([])

    const getItems = (data, time) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data){
                resolve(data)
            }else{
                reject('Error')
            }
        }, time)
    })

    useEffect(()=>{
        getItems(apiJSON, 3000)
        .then((resolve) => {
            setItems(resolve)
        }).catch((err) => console.log(err, ": No hay data"))
    },[])
    
  return (
    <>
    {/* <div>Soy ItemContainer</div> */}
    <div>
        <ItemListContainer items={items} />
    </div>
    </>
  )
}