import Link from 'next/link';
import { ArrowLeft, Target } from 'lucide-react';

export default function Inscription() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Target className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">
            <span className="text-slate-900">Problem</span>
            <span className="text-blue-600">Finder</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-10 space-y-4">
          <h1 className="text-2xl font-bold text-slate-900">
            ProblemFinder is launching soon.
          </h1>
          <p className="text-slate-600">
            We are finalizing the last details before opening.
            <br />
            Public access will be available very soon.
          </p>
          <p className="text-sm text-slate-400 pt-2">
            Contact:{' '}
            <a
              href="mailto:contact@iaco.app"
              className="text-blue-600 hover:text-blue-700 font-medium transition"
            >
              contact@iaco.app
            </a>
          </p>
        </div>

        {/* Back link */}
        <Link
          href="/problemsolver"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
