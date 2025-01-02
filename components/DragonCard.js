// /src/components/DragonCard.js
'use client'; // Este é um Client Component
import styles from '../src/styles/components/DragonCard.module.scss';

export default function DragonCard({ dragon, onDelete }) {
    return (
        <div className={styles.card}>
            <h3>{dragon.name}</h3>
            <p>Type: {dragon.type}</p>
            <button onClick={() => onDelete(dragon.id)}>Remove</button>
        </div>
    );
}
