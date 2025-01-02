'use client'; 

import { useEffect, useState } from 'react';
import DragonList from '../../../components/DragonList';

import withAuth from '../../../components/withAuth';

 function DragonListPage() {
    const [dragons, setDragons] = useState([]);
    
    useEffect(() => {
        async function fetchDragons() {
            const res = await fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
            const data = await res.json();
            setDragons(data.sort((a, b) => a.name.localeCompare(b.name)));
        }
        fetchDragons();
    }, []);
    
    const handleDelete = async (id) => {
        await fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, {
            method: 'DELETE',
        });
        setDragons((prevDragons) => prevDragons.filter((dragon) => dragon.id !== id));
        alert('Dragon removed');
    };

    return (
        <div>
            <DragonList dragons={dragons} onDelete={handleDelete} />
        </div>
    );
}

export default withAuth(DragonListPage);
