'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorContent() {
  const params = useSearchParams();
  const error = params.get('error');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">Something went wrong 😞</h1>
      <p className="text-red-500 mb-6">{error || "Unknown error"}</p>
      <a href="/login" className="text-blue-600 underline">
        Go back to Login
      </a>
    </div>
  );
}