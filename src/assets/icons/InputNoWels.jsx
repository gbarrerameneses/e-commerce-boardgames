import React from 'react'

const InputNoWels = () => {

    const keyDownHandler = ( evento ) => {

        const vocales = ['a','e','i','o','u']
        if(vocales.includes(evento.key.toLowerCase())){
            evento.preventDefault()
        }

        console.log('tecla: ' )
        console.log(evento.key )
    }

  return (
    <div>
        <h1>Input sin vocales</h1>
        <input onKeyDown={ keyDownHandler } type="text" />
    </div>
  )
}

export default InputNoWels