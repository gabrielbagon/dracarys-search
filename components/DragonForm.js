// /src/components/DragonForm.js
'use client';
import { useState } from 'react';

export default function DragonForm({ onSubmit, initialData = {} }) {
    const [name, setName] = useState(initialData.name || '');
    const [type, setType] = useState(initialData.type || '');

    const handleSubmit = () => {
        onSubmit({ name, type });
    };

    return (
        <div>
            <h2>{initialData.id ? 'Editar Dragão' : 'Cadastrar Dragão'}</h2>
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
            <button onClick={handleSubmit}>
                {initialData.id ? 'Salvar Alterações' : 'Cadastrar'}
            </button>
        </div>
    );
}
