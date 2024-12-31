// /src/app/dragons/new/page.js
'use client';
import { useState } from 'react';
import axios from 'axios';

export default function NewDragonPage() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async () => {
        await axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
            name,
            type,
            createdAt: new Date().toISOString(),
        });
        alert('Dragão criado!');
    };

    return (
        <div>
            <h1>Cadastrar Dragão</h1>
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Tipo" 
                value={type} 
                onChange={(e) => setType(e.target.value)} 
            />
            <button onClick={handleSubmit}>Salvar</button>
        </div>
    );
}
