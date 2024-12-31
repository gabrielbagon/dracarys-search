export default function DragonCard({ dragon, onDelete }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>{dragon.name}</h3>
            <p>Tipo: {dragon.type}</p>
            <button onClick={() => onDelete(dragon.id)}>Remover</button>
        </div>
    );
}
