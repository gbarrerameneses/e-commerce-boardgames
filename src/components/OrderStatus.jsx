import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import PurchaseData from './PurchaseData';

export const OrderStatus = () => {
    // const [claseN, setClaseN] = useState('clear-msg');
    const [orderFound, setOrderFound] = useState({});
    const [input, setInput] = useState("");
    const [errorCode, setErrorCode] = useState(false);


    const cleanSearch = (e) => {
        e.preventDefault();
        setInput(' ');
        setOrderFound({});
    }
    const getCodeOrder = (e) => {
        setInput((prev) => prev = e.target.value);
    }
    const checkCode = () => {
        if (input.length === 20) {
            setErrorCode(prev => prev = false);
            return true;
        } else {
            setErrorCode(prev => prev = true);
            setOrderFound({});
            return false;
        }
    }
    const getOrder = async (e) => {
        e.preventDefault();
        if (checkCode()) {
            const db = getFirestore();
            const objsCollection = collection(db, 'orders');
            const collections = await getDocs(objsCollection);
            const array = collections.docs.map(bk => ({ id: bk.id, ...bk.data() }));

            if (array.find(order => order.id.toString() === input)) {
                setOrderFound(array.find(order => order.id.toString() === input))
            } else {
                // setClaseN((prev) => prev = 'appear-msg');
                setOrderFound({});
            }
        }
    }
    return (
        <>
            <div className='container'>
                <div className='mt-5'>
                    <h2>Consulta tu orden</h2>
                    <p className=''>Para consultar el status de tu órden es necesario ingresar el número de 20 dígitos que te proporcionamos al momento de realizar tu compra:</p>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Número de órden</label>
                            <input type="text" class="form-control" value={input} onChange={(e) => { getCodeOrder(e) }} placeholder="SlcmT9BjoBwqwX6WVGYY" />
                            <div class="form-text">Es importante no dejar espacios</div>
                        </div>
                       <div className='d-flex justify-content-center'>
                            <button type="submit"  onClick={(e) => { cleanSearch(e) }} className="btn btn-outline-secondary mx-1">Limpiar campo</button>
                            <button type='submit' onClick={e => { getOrder(e) }} className="btn btn-outline-success mx-1">Buscar orden</button>
                            {errorCode && <p style={{ color: 'var(--bs-danger)'}}>El código ingresado no contiene 20 digitos</p>}
                       </div>
                    </form>
                </div>
                {
                    Object.entries(orderFound).length > 0 ? (
                        <div>
                            <PurchaseData {...orderFound} />
                        </div>
                    ) : (
                        <div>
                            <p style={{ color: 'var(--bs-danger)'}}>El número de órden incorrecto</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}