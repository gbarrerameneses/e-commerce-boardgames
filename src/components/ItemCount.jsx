import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(initial)
    let [change, setChange] = useState(true)

    const add = () => count < stock && setCount(next => next + 1)
    const discount = () => count > 0 && setCount(prev => prev - 1)

    let btnAdd = 'addCart'
    let btnIncrease = 'increase'
    let btnDecrease = 'decrease'

    stock === 0 && (btnAdd = 'block')
    count === 0 && (btnDecrease = 'cantDecrease')
    count === stock && (btnIncrease = 'cantIncrease')

    const addEventHandler = () => {
        setChange(prevState => prevState = false);

        onAdd(count);
    }

    return (
        <div>
            {stock === 0 ? (
                <div>
                    <p>No hay producto disponible en el inventario.</p>
                </div>
            ) : (
                <div>
                    <button className={btnDecrease} onClick={() => discount()} disabled={count === initial}> - </button>
                    <p>{count}</p>
                    <button className={btnIncrease} onClick={() => add()} disabled={count === stock}> + </button>
                </div>
            )}
            {change ?
                <button className={btnAdd} disabled={stock === 0} onClick={addEventHandler}>Agregar</button>
                :
                (<Link to={'/cart'}>
                    <button >Canasta</button>
                </Link>)
            }
        </div>
    )
}

export default ItemCount;



// import { useState } from 'react'

// const ItemCount = ({stock, initial, onAdd}) => {

//   const [counter, setCounter] = useState(initial)
  
   
//   const add = () => {
//     console.log('counter', counter);
//     console.log('stock', stock);
//     if(counter === stock) {
//         console.log('Ya no tienes stock')
//         alert('Ya no tienes stock')
//         return
//     }
//     setCounter(counter + 1)
//     console.log('contador: ', counter )
//   }
//   const less = () => {
//     if(counter === initial) {
//         return
//     }
//     setCounter(counter - 1)
//   }
//   return (
//     <>
//         {/* <div> Stock: {stock}</div>
//         <div> Initial: {initial}</div> */}
//        <section>
//         <div className='cFCounter'>
//             <div className="cCCounter">
//                 <div>
//                     <button onClick={ less } className="btn btn-outline btn-error"> - </button>
//                 </div>
//                 <div className="flex items-center mx-1.5">
//                     <strong>{counter}</strong>
//                 </div>
//                 <div>
//                     <button onClick={ add } className="btn btn-outline btn-success"> + </button>
//                 </div>
//             </div>
//             <div className="cBCounter">
//                 <button onClick={() => onAdd(counter)} > add</button>
//             </div>
//         </div>
//        </section>
//     </>
//   )
// }

// export default ItemCount