'use client';
import { useState } from 'react';
import styles from '../src/styles/components/DragonForm.module.scss';

export default function DragonForm({ onSubmit, initialData = {} }) {
    const [name, setName] = useState(initialData.name || '');
    const [type, setType] = useState(initialData.type || '');
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit({ name, type });
            setFeedback({ type: 'success', message: 'Dragão salvo com sucesso!' });
        } catch (err) {
            setFeedback({ type: 'error', message: 'Erro ao salvar o dragão.' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Salvar</button>
            {feedback && (
                <p className={feedback.type === 'success' ? styles.success : styles.error}>
                    {feedback.message}
                </p>
            )}
        </form>
    );
}
