'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function withAuth(WrappedComponent) {
    return function ProtectedRoute(props) {
        const router = useRouter();

        useEffect(() => {
            const isLoggedIn = localStorage.getItem('loggedIn');
            if (!isLoggedIn) {
                router.push('/login');
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };
}
