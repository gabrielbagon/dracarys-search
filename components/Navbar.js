'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../src/styles/components/Navbar.module.scss';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setHydrated(true);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        router.push('/login');
    };

    if (!hydrated) {
        return (
            <nav className={styles.navbar}>
                <div className={styles.logo}>Dracarys</div>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/dragons">Dragon List</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/dragons/new">Register</Link>
                    </li>
                    <li className={styles.navItem}>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Dracarys</div>
            <div className={styles.menu} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
                <li className={styles.navItem}>
                    <Link href="/dragons">Dragon List</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/dragons/new">Register</Link>
                </li>
                <li className={styles.navItem}>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}
