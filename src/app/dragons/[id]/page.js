'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../../../styles/components/DragonDetails.module.scss';

export default function DragonDetailsPage() {
    const searchParams = useSearchParams();
    const dragonId = searchParams.get('id');
    const [dragon, setDragon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!dragonId) {
            setError(true);
            setIsLoading(false);
            return;
        }

        async function fetchDragon() {
            try {
                const res = await fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonId}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`); // Mensagem de erro mais informativa
                }
                const data = await res.json();
                setDragon(data);
            } catch (err) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchDragon();
    }, [dragonId]);

    if (isLoading) return <p className={styles.loading}>Carregando...</p>;
    if (error) return <p className={styles.error}>Não foi possível carregar os detalhes do dragão.</p>;

    return (
        <div className={styles.container}>
            <h1>Detalhes do Dragão</h1>
            <div className={styles.details}>
                <p><strong>Nome:</strong> {dragon.name}</p>
                <p><strong>Tipo:</strong> {dragon.type}</p>
                <p><strong>Data de Criação:</strong> {new Date(dragon.createdAt).toLocaleDateString()}</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => router.push(`/dragons/new?id=${dragon.id}`)}>Editar</button>
                <button onClick={() => router.push('/dragons')}>Voltar para a Lista</button>
            </div>
        </div>
    );
}