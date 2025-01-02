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
            <h2>{initialData.id ? 'Edit Dragon' : 'Register Dragon'}</h2>
            <input
                type="text"
                placeholder="Dragon's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Dragon's type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            />
            <button type="submit">{initialData.id ? 'Save changes' : 'Register'}</button>
        </form>
    );
}
