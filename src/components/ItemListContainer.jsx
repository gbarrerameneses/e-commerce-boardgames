import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import apiData from '../apiData.json'
import ItemList from './ItemList'

// import { Carousel } from './Carousel';

export const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    const { categoryID } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemsCollections = collection(db, 'items');

        if (categoryID) {
            const qFilter = query(itemsCollections, where('category', '==', categoryID));
            getDocs(qFilter)
                .then(snapshot => {
                    setItems(snapshot.docs.map(res => ({ id: res.id, ...res.data() })));
                })
                .catch(error => console.error(error))
        } else {
            getDocs(itemsCollections)
                .then(snapshot => {
                    setItems(snapshot.docs.map(res => ({ id: res.id, ...res.data() })));
                });
        }
    }, [categoryID]);

    // useEffect(() => {
    //    const getBoardGames = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         apiData ? resolve(apiData) : reject('Error')
    //     }, 3000)
    //    })
    //    if(categoryID){
    //     getBoardGames
    //         .then(res => setItems(res.filter(item => item.category === categoryID)))
    //         .catch(error => console.error(error))
    //    } else {
    //     getBoardGames
    //         .then(res => setItems(res))
    //         .catch(error => console.error(error))
    //    }

    // }, [categoryID])



  return (
   <>
 {/* <Carousel/> */}
    <div className="container d-flex justify-content-around align-items-center flex-wrap mt-5">
        <ItemList data={items} />
    </div>
   </>
  )
}