// /src/app/login/page.js
'use client'; // Ativa o uso de hooks como useState e useEffect
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
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
            <h1>Login</h1>
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
