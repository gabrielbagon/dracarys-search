'use client';
import styles from '../src/styles/components/DragonCard.module.scss';

export default function DragonCard({ dragon, onDelete }) {
    const formattedDate = new Date(dragon.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    return (
        <div className={styles.card}>
            <h3>{dragon.name}</h3>
            <p>Type: {dragon.type}</p>
            <p className={styles.createdAt}>
                <strong>Created On:</strong> {formattedDate}
             </p>
            <button onClick={() => onDelete(dragon.id)}>Remove</button>
        </div>
    );
}

