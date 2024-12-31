// /src/app/dragons/[id]/page.js
import axios from 'axios';

async function fetchDragon(id) {
    const res = await axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`);
    return res.data;
}

export default async function DragonDetailsPage({ params }) {
    const dragon = await fetchDragon(params.id);

    return (
        <div>
            <h1>Detalhes do Dragão</h1>
            <p><strong>Nome:</strong> {dragon.name}</p>
            <p><strong>Tipo:</strong> {dragon.type}</p>
            <p><strong>Data de Criação:</strong> {dragon.createdAt}</p>
        </div>
    );
}
