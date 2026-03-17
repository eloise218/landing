import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Gestionnaire de Landing Pages</h1>
        <p className="text-xl text-gray-600 mb-12">
          Sélectionnez une landing page pour commencer
        </p>
        
        <div className="flex gap-8 flex-col sm:flex-row justify-center">
          <Link 
            href="/landing1"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Landing Page 1
          </Link>
          
          <Link 
            href="/landing2"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Landing Page 2
          </Link>
        </div>
      </div>
    </main>
            Deploy Now
      {" "}
    </main>
  );
}
