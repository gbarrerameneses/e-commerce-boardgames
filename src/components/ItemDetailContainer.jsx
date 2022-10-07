import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [ boardgames, setBoardGames ] = useState({})
    const { detailID } = useParams()

    useEffect(() => {
        const db = getFirestore();
        getDoc(doc(db, "items", detailID))
            .then( res=> setBoardGames( ({id: res.id, ...res.data()}) ));
    }, [detailID])
    
  return (
    <>
   
    <div className='container'>
        { Object.entries(boardgames).length === 0 ?
        <div className='text-center align-middle'>
          <strong>Loading...</strong>
          <div className='spinner-border ms-auto' role='status' aria-hidden='true'></div>
        </div>
        :
        <ItemDetail boardgames={boardgames} />
        }
    </div>
    </>
  )
}

export default ItemDetailContainer