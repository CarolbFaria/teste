/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login = () => {
   const inputPasswordRef = useRef<HTMLInputElement>(null);
   
    const [password, setPassword] = useState ('');
    const [email, setEmail] = useState ('');

    const emailength = useMemo(() => {
     console.log('Executou')
     return email.length * 1000;   
    }, [email.length]);

useEffect(() => {
    if (window.confirm('Voce é homem?')) {
        console.log('Homem')
    } else {
        console.log('Mulher')
    }
}, []);

useEffect(() => {
    console.log(password)
}, [password]);

useEffect(() => {
    console.log(email) 
}, [email]);

    const handleEntrar = useCallback (() => {
        console.log(email)
        console.log(password)
    }, [email, password]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {email.length}</p>
               
                <label>
                    <span>Email</span>
                    <input value={email} 
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />
                </label>
               
                <label>
                    <span>Senha</span>
                    <input
                     type="password" 
                     value={password} 
                     ref={inputPasswordRef}
                     onChange={e => setPassword(e.target.value)} 
                     />
                </label>
            
            <button type="button" onClick={handleEntrar}>
                Entrar 
            </button>
            </form>
        </div>
    );
}