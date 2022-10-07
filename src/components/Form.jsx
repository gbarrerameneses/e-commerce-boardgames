import React, { useState } from 'react'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { Formik } from 'formik'
import { useCart } from '../context/CartContext'
import { Link }from 'react-router-dom'
import Swal from 'sweetalert2'

export const Form = () => {
    const { cart, totalPrice, removeAll } = useCart()
    const theDate = new Date().toISOString().slice(0, 10)
    const [send, setSend] = useState(false)

    const dataFirebase = ({ name, last_name, phone, email }) => {
        const order = {
            buyer: {
                name: name,
                last_name: last_name,
                phone: phone,
                email: email
            },
            items: cart.map(boardgame => ({ id: boardgame.id, title: boardgame.title, price: boardgame.price })),
            date: theDate,
            finalPrice: totalPrice()
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(({ id }) => {
            Swal.fire(
                `¡Tu compra fue aprobada! A partir de hoy ${theDate} tienes 7 días para recoger tu juego de mesa.`,
                `El número de tu compra es ${id}`,
                'success'
              )
        })
    }
    return (
        <>
            <div className='d-flex justify-content-center text-center mt-5'>
                <div className='mx-2'>
                    <button className='btn btn-warning' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
                        Proceder al pago
                    </button>
                </div>
                <div className='mx-2'>
                    <Link className='btn btn-dark' to={'/'} >Agregar otro juego
                    </Link>
                </div>
            </div>
            <div className='offcanvas offcanvas-start' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title' id='offcanvasExampleLabel'>Información de contacto</h5>
                    <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className='offcanvas-body'>
                    <div>
                        <Formik
                            initialValues={{ name: '', last_name:'', email: '', phone: '' }}
                            validate={(values) => {
                                let errores = {}

                                if(!values.name) {
                                    errores.nombre = 'El campo es obligatorio'
                                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                                }
                                if(!values.phone) {
                                    errores.telefono = 'El campo es obligatorio'
                                }
                                if (!values.email) {
                                    errores.correo = 'El campo es obligatorio'
                                }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                    errores.correo = 'El email es incorrecto'
                                }
                                return errores
                            }}

                            onSubmit={(value, { resetForm }) => {
                                dataFirebase(value)
                                resetForm()
                                setSend(true)
                                setTimeout(() => {
                                    setSend(false)
                                    removeAll()
                                }, 1500)
                            }}>
                            {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                                
                                <form onSubmit={handleSubmit} className='container'>
                                    <div className='col-md-12 mt-2'>
                                        <label htmlFor='name' className='form-label'>Nombre</label>
                                        <input
                                            id='name'
                                            name='name'
                                            className='form-control' 
                                            placeholder='Carlos'
                                            type='text'
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                        {touched.name && errors.nombre && <div style={{ color: 'var(--bs-danger)' }}>{errors.nombre}</div>}
                                    </div>
                                    <div className='col-md-12 mt-2'>
                                        <label htmlFor='last_name' className='form-label'>Apellidos</label>
                                        <input
                                            id='last_name'
                                            name='last_name'
                                            className='form-control' 
                                            placeholder='Hernández'
                                            type='text'
                                           />
                                        {/* {touched.name && errors.nombre && <div style={{ color: 'var(--bs-danger)' }}>{errors.nombre}</div>} */}
                                    </div>
                                    <div className='col-md-12 mt-2'>
                                        <label htmlFor='email' className='form-label'>Correo electrónico</label>
                                        <div className='input-group'>
                                        <span className='input-group-text' id='inputGroupPrepend'>@</span>
                                        <input
                                            id='email'
                                            name='email'
                                            className='form-control' 
                                            placeholder='example@email.com'
                                            type='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                        </div>
                                        {touched.email && errors.correo && <div style={{ color: 'var(--bs-danger)' }}>{errors.correo}</div>}
                                    </div>
                                    <div className='col-md-12 mt-2'>
                                        <label htmlFor='phone' className='form-label'>Número telefónico</label>
                                        <input
                                            id='phone'
                                            name='phone'
                                            className='form-control' 
                                            placeholder='5555-5555-5555'
                                            maxlength='14'
                                            type='phone'
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                        {touched.phone && errors.telefono && <div style={{ color: 'var(--bs-danger)' }}>{errors.telefono}</div>}
                                    </div>
                                    <div className='col-md-12 mt-2'>
                                        <button type='submit' className='btn btn-dark mt-3' >Finalizar compra</button>
                                    </div>
                                    
                                    {
                                        send && <div >
                                            <p className='mt-3' style={{ color: 'var(--bs-success)' }}>La compra ha sido creada correctamente!</p></div>
                                    }
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

