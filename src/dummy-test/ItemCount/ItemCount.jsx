import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  
   
  const add = () => {
    console.log('counter', counter);
    console.log('stock', stock);
    if(counter === stock) {
        console.log('Ya no tienes stock')
        alert('Ya no tienes stock')
        return
    }
    setCounter(counter + 1)
    console.log('contador: ', counter )
  }
  const less = () => {
    if(counter === initial) {
        return
    }
    setCounter(counter - 1)
  }
  return (
    <>
        {/* <div> Stock: {stock}</div>
        <div> Initial: {initial}</div> */}
       <section>
        <div className='cFCounter'>
            <div className="cCCounter">
                <div>
                    <button onClick={ less } className="btn btn-outline btn-error"> - </button>
                </div>
                <div className="flex items-center mx-1.5">
                    <strong>{counter}</strong>
                </div>
                <div>
                    <button onClick={ add } className="btn btn-outline btn-success"> + </button>
                </div>
            </div>
            <div className="cBCounter">
                <button onClick={() => onAdd(counter)} > add</button>
            </div>
        </div>
       </section>
    </>
  )
}

export default ItemCount