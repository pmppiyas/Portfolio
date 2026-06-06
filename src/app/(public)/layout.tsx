import { Toaster } from '@/components/ui/sonner';
import { React } from 'next/dist/server/route-modules/app-page/vendored/rsc/entrypoints';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="min-h-screen">
        {children}
        <Toaster />
      </div>
    </div>
  );


}
