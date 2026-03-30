import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 px-6">
      <div className="text-center">
        <p className="text-sm font-mono text-blue-500 mb-4">404</p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-[#ededed] mb-4">
          Page not found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
