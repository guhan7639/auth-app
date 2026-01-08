'use client';
import Link from 'next/link';

export default function Unauthorized() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', marginTop: '10%' }}>
            <h1 style={{ color: 'var(--error)' }}>Access Denied</h1>
            <p>You do not have permission to view this page.</p>
            <Link href="/dashboard" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                Return to Dashboard
            </Link>
        </div>
    );
}
