import React, { useRef, useState } from 'react';
import style from './formularz.module.css';
function FormComp(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ repassword, setRePassword] = useState('');
    const [ dataB, setDataB ] = useState({ email:'x', password: 'y'})
    const emailForm = useRef();
    const pass = useRef();
    const repass = useRef()
    const passwordKey = () => {
        console.log();
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const regSmall = new RegExp('[a-z]');
        const regBig = new RegExp('[A-Z]');
        const regNumber = new RegExp('[0-9]');
        const regSpecial = new RegExp('[!@#$%^&*]');
        const regLength = new RegExp('.{6,}$');
        const regValue1 = regSmall.test(email);
        const regValue2 = regBig.test(email);
        const regValue3 = regNumber.test(email);
        const regValue4 = regSpecial.test(email);
        const regValue5 = regLength.test(email);
        if(pass.current.value===repass.current.value){
            console.log('brawo');
            if(regValue1!==true){
                console.log("błąd")
            }
        }
        const regValue1 = regSmall.test(email);
        const regValue2 = regBig.test(email);
        const regValue3 = regNumber.test(email);
        const regValue4 = regSpecial.test(email);
        const regValue5 = regLength.test(email);
        //if (regValue !== null){console.log("brawo");}
        console.log(regValue);
        passwordKey();

    }
    
    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h4>Email:</h4>
                <input ref={emailForm} onChange={(e)=>setEmail(e.target.value)} name="email" type="text" />
                <h4>Hasło:</h4>
                <input ref={pass} name="password" type="text" />
                <h4>powtórz hasło:</h4>
                <input ref={repass} name="repass" type="text" />
                <h4>Wyślij formularz</h4>
                <button type="send" >Wyślij</button>
            </form>
        </div>
    )
}

export default FormComp;