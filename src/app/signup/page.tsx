'use client'
import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [user, setUser] = useState<{ name: string } | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) => /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('El correo electrónico no es válido');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial');
      return;
    }
    setError('');
    setUser({ name: formData.name });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded text-black"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded text-black"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded text-black"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-800 transition-colors">Sign Up</button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </main>
  );
}