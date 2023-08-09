import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Order() {
    let { goodId } = useParams();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const popup = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            navigate('/');
        }, 5000);
    };
    function getInput(x) {
        return (document.getElementById(x).value );
    }
    function getOutput(x, y) {
        return ( console.log(x + y) );
    }
    const showInput = (event) => {
        event.preventDefault()
        const NameInput = getInput('inputName');
        const EmailInput = getInput('inputEmail');
        getOutput("Ім'я: ", NameInput);
        getOutput("Email: ", EmailInput);
        getOutput("Артикул: ", goodId);

        popup();
    }


    return (
        <>
            <h1>Order</h1>
            <div className='input-block'>
                <form method="Get" onSubmit={showInput}>
                    <label for="inputName">Введіть Ім'я:</label>
                    <input id='inputName' className='input' type="text" placeholder="Ім'я" required />
                    <label for="inputEmail">Введіть пошту:</label>
                    <input id='inputEmail' className='input' type="email" placeholder='Email' required/>
                    <button type="submit" className='input-button'>Відправити</button>                    
                </form>
            </div>

            {showPopup && (
                <div class="popup-overlay">
                    <div class="popup-content">
                        <p>Дякуємо за замовлення!</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Order;