import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { Formik } from 'formik';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

export const Form = () => {
    const { cart, totalPrice, removeAll } = useCart();
    const theDate = new Date().toISOString().slice(0, 10);
    const [send, setSend] = useState(false);

    const dataFirebase = ({ name, phone, email }) => {
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart.map(boardgame => ({ id: boardgame.id, title: boardgame.title, price: boardgame.price })),
            date: theDate,
            finalPrice: totalPrice()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({ id }) => {
            Swal.fire(
                `Tu compra fue realizada ${theDate}`,
                `El número de compra es ${id}`,
                'success'
              )
        });
    }
    return (
        <>
        <div className='text-center mt-5'>
            <button className='btn btn-warning' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Proceder al pago
            </button>
        </div>
        <div className='offcanvas offcanvas-start' tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id="offcanvasExampleLabel">Información de contacto</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className='offcanvas-body'>
            <div>
            <Formik
                    initialValues={{ name: '', email: '', phone: '' }}
                    validate={(values) => {
                        let errores = {};

                        if(!values.name) {
                            errores.nombre = "El campo es obligatorio";
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                            errores.nombre = "El nombre solo puede contener letras y espacios";
                        }
                        if(!values.phone) {
                            errores.telefono = "El campo es obligatorio";
                        }
                        if (!values.email) {
                            errores.correo = "El campo es obligatorio";
                        }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                            errores.correo = "El email es incorrecto";
                        }
                        return errores;
                    }}

                    onSubmit={(value, { resetForm }) => {
                        dataFirebase(value);
                        resetForm();
                        setSend(true);
                        setTimeout(() => {
                            setSend(false);
                            removeAll();
                        }, 1500);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                        
                        <form onSubmit={handleSubmit} className='container'>
                            <div className='col-md-12 mt-2'>
                                <label htmlFor='name' className='form-label'>Nombre completo</label>
                                <input
                                    id='name'
                                    name='name'
                                    className='form-control' 
                                    placeholder='Carlos'
                                    type='text'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.nombre && <div style={{ color: 'var(--bs-danger)' }}>{errors.nombre}</div>}
                            </div>
                            <div className='col-md-12 mt-2'>
                                <label htmlFor='email' className='form-label'>Correo electrónico</label>
                                <div className='input-group'>
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input
                                    id='email'
                                    name='email'
                                    className='form-control' 
                                    placeholder='example@email.com'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
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
                                    type='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.phone && errors.telefono && <div style={{ color: 'var(--bs-danger)' }}>{errors.telefono}</div>}
                            </div>
                            <div className='col-md-12 mt-2'>
                                <button type='submit' className='btn btn-dark mt-3' >Finalizar compra</button>
                                {console.log(send)}
                            </div>
                            {
                                send && <div >
                                    <p className=''>La compra ha sido creada correctamente!</p></div>
                            }
                        </form>
                    )}
                    
                </Formik>
            </div>
            {/* <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div> */}
        </div>
        </div>

        
        </>
    )
}

