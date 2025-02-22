import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Sitio</title>
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <nav className="bg-gray-800 p-4 text-white flex justify-between w-full max-w-4xl">
          <Link href="/" className="text-xl font-bold">LOGO</Link>
          <div className="flex space-x-8">
            <Link href="/counter" className="mx-2">Counter</Link>
            <Link href="/page1" className="mx-2">Page 1</Link>
          </div>
        </nav>
        <main className="p-4 flex items-center justify-center flex-grow w-full max-w-4xl">{children}</main>
      </body>
    </html>
  );
}