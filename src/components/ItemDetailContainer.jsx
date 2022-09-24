import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, getFirestore, doc } from 'firebase/firestore';
// import apiData from '../apiData.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [ boardgames, setBoardGames ] = useState({})
    const { detailID } = useParams()

    useEffect(() => {
        const db = getFirestore();
        getDoc(doc(db, "items", detailID))
            .then( res=> setBoardGames( ({id: res.id, ...res.data()}) ));
    }, [detailID])

    // useEffect(() =>{
    //     const getBoardGame = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             apiData ? resolve(apiData) : reject('Error')
    //         }, 3000)
    //     })
    //     getBoardGame
    //         .then(detailID && (res => setBoardGames(res.find(bg => bg.id === detailID))))
    //         .catch(error => console.error(error))
    // }, [detailID])

    

  return (
    <>
    <div>ItemDetailContainer</div>
    <div>
        { Object.entries(boardgames).length === 0 ?
        <div><h2>Cargando...</h2></div>
        :
        <ItemDetail boardgames={boardgames} />
        // <ItemDetail {...boardgames} />
        }
    </div>
    </>
  )
}

export default ItemDetailContainer