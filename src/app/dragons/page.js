// /src/app/dragons/page.js
'use client'; // Torna a página um Client Component

import { useEffect, useState } from 'react';
import DragonList from '../../../components/DragonList';

export default function DragonListPage() {
    const [dragons, setDragons] = useState([]);

    // Buscar os dragões ao carregar a página
    useEffect(() => {
        async function fetchDragons() {
            const res = await fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
            const data = await res.json();
            setDragons(data.sort((a, b) => a.name.localeCompare(b.name)));
        }
        fetchDragons();
    }, []);

    // Deletar dragão
    const handleDelete = async (id) => {
        await fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, {
            method: 'DELETE',
        });
        setDragons((prevDragons) => prevDragons.filter((dragon) => dragon.id !== id));
        alert('Dragão removido');
    };

    return (
        <div>
            <DragonList dragons={dragons} onDelete={handleDelete} />
        </div>
    );
}