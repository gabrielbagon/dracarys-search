'use client';

import DragonCard from './DragonCard';

export default function DragonList({ dragons, onDelete }) {
    return (
        <div>
            <h2>Dragon List</h2>
            {dragons.map((dragon) => (
                <DragonCard key={dragon.id} dragon={dragon} onDelete={onDelete} />
            ))}
        </div>
    );
}
