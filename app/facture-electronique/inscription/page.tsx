import Link from 'next/link';
import { ArrowLeft, FileCheck } from 'lucide-react';

export default function Inscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <Link
          href="/facture-electronique"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Link>

        <div className="space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
            <FileCheck className="w-8 h-8 text-teal-500" />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Bientôt disponible
            </h1>
            <p className="text-xl text-gray-600">
              Nous préparons un outil simple et conforme pour gérer vos factures électroniques en tant que micro-entrepreneur.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-gray-500 mb-6">
              En attendant vous pouvez nous contacter via <a href="mailto:contact@iaco.app" className="font-semibold text-teal-500 hover:text-teal-600 transition">contact@iaco.app</a>
            </p>
            <p className="text-sm text-teal-600 font-medium">
              Statut : En construction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
