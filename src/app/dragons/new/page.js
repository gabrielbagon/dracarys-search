'use client';
import { useState } from 'react';
import styles from '@/styles/components/DragonForm.module.scss';

export default function NewDragonPage() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, type }),
            });
            if (!res.ok) throw new Error('Erro ao cadastrar o dragão.');
            setFeedback({ type: 'success', message: 'Dragão cadastrado com sucesso!' });
            setName('');
            setType('');
        } catch (err) {
            setFeedback({ type: 'error', message: err.message });
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastrar Dragão</h1>
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
                <button className={styles.button} type="submit">Cadastrar</button>
                {feedback && (
                    <p className={feedback.type === 'success' ? styles.success : styles.error}>
                        {feedback.message}
                    </p>
                )}
            </form>
        </div>
    );
}
