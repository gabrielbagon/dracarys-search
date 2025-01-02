'use client';
import { useState } from 'react';
import styles from '../../../styles/components/DragonForm.module.scss';

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
        <div className={styles.container}>
            <h2 className={styles.title}>{initialData.id ? 'Editar Dragão' : 'Cadastrar Dragão'}</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Nome do Dragão"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Tipo do Dragão"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
                <button className={styles.button} type="submit">Salvar</button>
                {feedback && (
                    <p className={feedback.type === 'success' ? styles.success : styles.error}>
                        {feedback.message}
                    </p>
                )}
            </form>
        </div>
    );
}
