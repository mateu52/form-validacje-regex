import React, { useRef, useState } from 'react';
import style from './formularz.module.css';
function FormComp(){
    const [ email, setEmail ] = useState(true);
    const [ password, setPassword] = useState('');
    const dataB = ['mat@onet.pl', 'mati@onet.pl'];
    const emailForm = useRef();
    const pass = useRef();
    const repass = useRef();
    const nameErrorRef = useRef();
    const emailErrorRef = useRef();
    const hEmail = ( event ) => {
        const inData = dataB.indexOf(emailForm.current.value) === -1 ? false: true;
        if (inData===false){
            setEmail(false);
        }}
    const handleSubmit = (event) => {
        event.preventDefault();
        const regSmall = new RegExp('[a-z]');
        const regBig = new RegExp('[A-Z]');
        const regNumber = new RegExp('[0-9]');
        const regSpecial = new RegExp('[!@#$%^&*]');
        const regLength = new RegExp('.{6,}');
        const regValue1 = regSmall.test(password);
        const regValue2 = regBig.test(password);
        const regValue3 = regNumber.test(password);
        const regValue4 = regSpecial.test(password);
        const regValue5 = regLength.test(password);
        if(pass.current.value===repass.current.value){
            setPassword(pass.current.value);
            console.log(password);
            if(regValue1!==true){
                nameErrorRef.current.textContent = "wymagana mała litera";
            }
            else if(regValue2!==true){
                nameErrorRef.current.textContent = "wymagana duża litera";
            }
            else if(regValue3!==true){
                nameErrorRef.current.textContent = "wymagana cyfra";
            }
            else if(regValue4!==true){
                nameErrorRef.current.textContent = "wymagany znak specjalny";
            }
            else if(regValue5!==true){
                nameErrorRef.current.textContent = "minimalna długośc - 8 znaków";
            }
        }
        else if(pass.current.value!==repass.current.value){
            emailErrorRef.current.textContent = "hasła nie są identyczne";
        }
        const isEMok = dataB.indexOf(emailForm.current.value) === -1 ? false: true;
        if (isEMok===false){
            dataB.push(emailForm.current.value);
        }
        console.log(regValue1, isEMok);
    }
    
    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h4>Email:</h4>
                <input ref={emailForm} onBlur={hEmail} name="email" type="text" />
                <h4>Hasło:</h4>
                <input ref={pass} name="password" type="text" disabled={email} />
                <p ref={nameErrorRef}></p>
                <h4>powtórz hasło:</h4>
                <input ref={repass} name="repass" type="text"  disabled={email} />
                <p ref={emailErrorRef}></p>
                <h4>Wyślij formularz</h4>
                <button type="send" >Wyślij</button>
            </form>
        </div>
    )
}

export default FormComp;