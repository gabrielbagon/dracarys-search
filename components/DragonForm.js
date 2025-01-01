'use client';
import { useState } from 'react';
import styles from '../src/styles/components/DragonForm.module.scss';

export default function DragonForm({ onSubmit, initialData = {} }) {
    const [name, setName] = useState(initialData.name || '');
    const [type, setType] = useState(initialData.type || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, type });
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h2>{initialData.id ? 'Editar Dragão' : 'Cadastrar Dragão'}</h2>
            <input
                type="text"
                placeholder="Nome do Dragão"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Tipo do Dragão"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            />
            <button type="submit">{initialData.id ? 'Salvar Alterações' : 'Cadastrar'}</button>
        </form>
    );
}
