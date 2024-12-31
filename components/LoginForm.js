// /src/components/LoginForm.js
'use client'; // Para permitir o uso de hooks
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('loggedIn', true);
            router.push('/dragons');
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Usuário" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
}
