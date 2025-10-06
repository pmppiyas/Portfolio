import ErrorContent from '@/components/module/shared/ErrorContent';
import { Suspense } from 'react';


export default function ErrorPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading error info...</div>}>
      <ErrorContent />
    </Suspense>
  );
}