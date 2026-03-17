import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function Bienvenue() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-4">Bienvenue sur Formation !</h1>

        <p className="text-lg text-gray-600 mb-8">
          On prépare tes formations — ça arrive vite.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}