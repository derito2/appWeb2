'use client'
import Link from 'next/link';
import { useState } from 'react';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name: string } | null>(null);
  return (
    <html lang="es">
      <head>
        <title>My Pages</title>
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <nav className="bg-gray-800 p-4 text-white flex justify-between w-full max-w-4xl">
          <Link href="/" className="text-xl font-bold">LOGO</Link>
          <div className="flex space-x-8">
            <Link href="/counter" className="mx-2">Counter</Link>
            <Link href="/page1" className="mx-2">Page 1</Link>
            <Link href="/signup" className="mx-2">Sign Up</Link>
          </div>
        </nav>
        {user && <p className="text-green-500">Hola, {user.name}</p>}
        <main className="p-4 flex items-center justify-center flex-grow w-full max-w-4xl">{children}</main>
      </body>
    </html>
  );
}