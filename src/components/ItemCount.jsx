import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(initial)
    let [change, setChange] = useState(true)

    const add = () => count < stock && setCount(next => next + 1)
    const discount = () => count > 0 && setCount(prev => prev - 1)

    const addEventHandler = () => {
        setChange(prevState => prevState = false)
        onAdd(count);
    }

    return (
        <>
            <div className='container'>
                {stock === 0 ? (
                    <div>
                        <p style={{ color: 'var(--bs-danger)' }}>No tenemos producto disponible en este momento.</p>
                    </div>
                ) : (
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <button className='btn btn-outline-dark' onClick={() => discount()} disabled={count === initial}> - </button>
                        </div>
                        <div className='text-center mx-2 pt-1'>
                            <p><strong>{count}</strong></p>
                        </div>
                        <div>
                            <button className='btn btn-outline-dark' onClick={() => add()} disabled={count === stock}> + </button>
                        </div>
                    </div>
                )}
                
                {change ?
                    <button className='btn btn-outline-success mt-5 container' disabled={stock === 0} onClick={addEventHandler}>Agregar</button>
                    :
                    (<Link to={'/cart'}>
                        <button className='btn btn-outline-success mt-5 container'>Ir a tu canasta</button>
                    </Link>)
                }
                <Link to={'/'}>
                    <button className='btn btn-outline-primary mt-4 container'>Regresar</button>
                </Link>
            </div>
        </>
    )
}

export default ItemCount