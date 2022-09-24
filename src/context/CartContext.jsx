import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCart = () => { return useContext( CartContext ) };

export const CartProvider = ( { defaultValue = [], children } ) => {

    const [cart, setCart] = useState( defaultValue )
    const array = [ ...cart ]

    const addToCart = ( item, count ) => {
        if(cart.find( boardgame => boardgame.id === item.id ) ){
            let index = array.findIndex( ( boardgame ) => boardgame.id === item.id )
            array[index].count += count
            let aux = { ...array[ index ] }
            setCart( [ aux ] )
        } else {
            setCart( [ ...cart, { ...item, count } ] )
        }
    }

    const removeOne = (id) => {
        setCart( prevState => prevState.filter( boardgame => boardgame.id !== id ) )
    }

    const removeAll = () => {
        setCart([]);
    }
    
    const totalCanasta = ()=> {
        return array.reduce((current, obj) => current + obj.count , 0)
    }
    
    const totalPrice = ()=> {
        return array.reduce((current, obj)=> current + obj.price*obj.count ,0)
    }
    
    const context = { cart, addToCart, removeAll, removeOne, totalCanasta, totalPrice }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}


// import React, { useState, useContext } from 'react';

// const CartContext = React.createContext([]);

// export const useCart = () => { return useContext( CartContext ) };

// export const CartProvider = ( { defaultValue = [], children } ) => {

//     const [cart, setCart] = useState( defaultValue )
//     const array = [ ...cart ]

//     const addToCart = ( item, count ) => {
        
//         if(cart.find( boardgame => boardgame.id === item.id ) ){
//             let index = array.findIndex( ( boardgame ) => boardgame.id === item.id )
//             array[index].count += count
//             let aux = { ...array[ index ] }
//             setCart( [ aux ] )
//         } else {
//             setCart( [ ...cart, { ...item, count } ] )
//         }
//     }

//     const removeAll = () => {
//         setCart([]);
//     }
    
//     const removeOne = (id) => {
//         setCart( prevState => prevState.filter( boardgame => boardgame.id !== id ) )
//     }

//     const context = { cart, addToCart, removeAll, removeOne }

//     return (
//         <CartContext.Provider value={context}>
//             {children}
//         </CartContext.Provider>
//     )
// }