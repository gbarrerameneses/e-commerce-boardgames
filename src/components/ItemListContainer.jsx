import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiData from '../apiData.json'
import ItemList from './ItemList'

export const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    const { categoryID } = useParams()

    useEffect(() => {
       const getBoardGames = new Promise((resolve, reject) => {
        setTimeout(() => {
            apiData ? resolve(apiData) : reject('Error')
        }, 3000)
       })
       if(categoryID){
        getBoardGames
            .then(res => setItems(res.filter(item => item.category === categoryID)))
            .catch(error => console.error(error))
       } else {
        getBoardGames
            .then(res => setItems(res))
            .catch(error => console.error(error))
       }

    }, [categoryID])



  return (
   <>
     <div>ItemListContainer</div>
     <div>
        { items?.length ?
        <div>
            <ItemList data={items}/>
        </div>    
        :
        <div>
            <h2>Cargando...</h2>
        </div>
    }
     </div>
   </>
  )
}