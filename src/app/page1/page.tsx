'use client';
import { useState } from 'react';

export default function Page1() {
  const [color, setColor] = useState<keyof typeof colors>("gray");
  const colors = {
    gray: "bg-gray-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className={`w-32 h-32 rounded ${colors[color]} transition-colors`}></div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-500 text-white rounded-md">Red</button>
        <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-500 text-white rounded-md">Blue</button>
        <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-500 text-white rounded-md">Green</button>
        <button onClick={() => setColor("orange")} className="px-4 py-2 bg-orange-500 text-white rounded-md">Orange</button>
      </div>
    </main>
  );
}
