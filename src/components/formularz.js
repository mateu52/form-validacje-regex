import React, { useRef, useState } from 'react';
import style from './formularz.module.css';
function FormComp(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ dataB, setDataB ] = useState({ email:'x', password: 'y'})
    const emailForm = useRef();

    const passwordKey = () => {
        //const found = value.length === (value.length>6) ? true : false;
        console.log();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const re = new RegExp('abc');
        const value = emailForm.current.value;
        const regValue = value.match(re);
        if (regValue !== null){
            console.log("brawo");
        }
        console.log(regValue);
        passwordKey();

    }
    
    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h4>Email:</h4>
                <input ref={emailForm} name="email" type="text" />
                <h4>Hasło:</h4>
                <input name="password" type="text" />
                <h4>powtórz hasło:</h4>
                <input name="repass" type="text" />
                <button type="send" />
            </form>
        </div>
    )
}

export default FormComp;