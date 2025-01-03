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
                    throw new Error(`HTTP error! status: ${res.status}`);
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

    if (isLoading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>The dragon's details could not be loaded.</p>;

    return (
        <div className={styles.container}>
            <h1>Dragon details</h1>
            <div className={styles.details}>
                <p><strong>Name:</strong> {dragon.name}</p>
                <p><strong>Type:</strong> {dragon.type}</p>
                <p><strong>Created at:</strong> {new Date(dragon.createdAt).toLocaleDateString()}</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => router.push(`/dragons/new?id=${dragon.id}`)}>Edit</button>
                <button onClick={() => router.push('/dragons')}>Back to the list</button>
            </div>
        </div>
    );
}