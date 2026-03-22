import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

export default function Inscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <Link
          href="/problemsolver"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Link>

        <div className="space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
            <Zap className="w-8 h-8 text-orange-500" />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              À bientôt !
            </h1>
            <p className="text-xl text-gray-600">
              le site est en construction et arrive très bientôt
            </p>
          </div>

          <div className="pt-8">
            <p className="text-gray-500 mb-6">
              En attendant vous pouvez nous contacter via <a href="mailto:contact@iaco.app" className="font-semibold text-orange-500 hover:text-orange-600 transition">contact@iaco.app</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}