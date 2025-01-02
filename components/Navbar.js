import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
            <Link href="/dragons">Dragon List</Link> |{' '}
            <Link href="/dragons/new">Dragon Register</Link>
        </nav>
    );
}
