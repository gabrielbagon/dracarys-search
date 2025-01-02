'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../src/styles/components/LoginForm.module.scss';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('loggedIn', true);
            router.push('/dragons');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        
        <form className={styles.container} onSubmit={handleLogin}>
            <h1>Dracarys</h1>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign in</button>
        </form>
      
    );
}
