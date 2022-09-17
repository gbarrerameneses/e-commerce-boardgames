import React from 'react'
import addToCart from '../assets/icons/addToCart.svg'

const CardWidget = () => {
    const carStyle = {
        width: '30px',
        height: '30px',
        marginTop: '5px'
    }
  return (
    <div>
        <img src={addToCart} alt="" style={carStyle} />
    </div>
  )
}

export default CardWidget