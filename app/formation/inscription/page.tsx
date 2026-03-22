'use client';

import Link from 'next/link';
import { ArrowLeft, Rocket } from 'lucide-react';

export default function Inscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <Link
          href="/formation"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la formation
        </Link>

        <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-100">
          <div className="mb-6">
            <Rocket className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            On prépare quelque chose de fou
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            La formation arrive très bientôt. Elle sera révolutionnaire, complète et faite pour tous les débutants qui veulent créer sans coder.
          </p>

          <p className="text-gray-600 mb-8">
            En attendant, tu peux nous contacter sur{' '}
            <a href="mailto:contact@iaco.app" className="text-blue-600 hover:text-blue-800 font-semibold underline">
              contact@iaco.app
            </a>
          </p>

          <Link
            href="/formation"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600 whitespace-nowrap"
          >
            Retour à la landing
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Statut : <span className="font-semibold text-orange-600">En construction</span>
        </p>
      </div>
    </div>
  );
}
