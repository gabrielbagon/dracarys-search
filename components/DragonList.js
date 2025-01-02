'use client';

import DragonCard from './DragonCard';
import styles from '../src/styles/components/DragonCard.module.scss';


export default function DragonList({ dragons, onDelete }) {
    if (dragons.length === 0) {
        return <p className={styles.empty}>Nenhum dragão encontrado.</p>;
    }

    return (
        <div>
            {dragons.map((dragon) => (
                <DragonCard key={dragon.id} dragon={dragon} onDelete={onDelete} />
            ))}
        </div>
    );
}

