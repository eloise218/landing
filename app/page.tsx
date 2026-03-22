import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">🛠️ Panel de test iaco.app</h1>
        <p className="text-xl text-gray-600 mb-12">
          Accès aux landings pour tests (réservé admin)
        </p>

        <div className="flex gap-8 flex-col sm:flex-row justify-center">
          <Link
            href="/problemsolver"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            🧠 ProblemFinder
          </Link>

          <Link
            href="/formation"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            📚 Formation
          </Link>

          <Link
            href="/facture-electronique"
            className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            🧾 Facture Électronique
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          ⚠️ Cette page n&apos;est visible que sur iaco.app (sans sous-domaine)<br/>
          🔧 En local : utilise les liens ci-dessus pour tester les landings
        </p>
      </div>
    </main>
  );
}
