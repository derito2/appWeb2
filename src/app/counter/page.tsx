'use client'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-800">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition-colors"
      >
        Increment
      </button>
    </main>
  );
}