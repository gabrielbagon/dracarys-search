import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
            <Link href="/dragons">Lista de Dragões</Link> |{' '}
            <Link href="/dragons/new">Cadastrar Dragão</Link>
        </nav>
    );
}
