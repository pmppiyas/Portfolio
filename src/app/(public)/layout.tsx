import Navbar from '@/components/module/shared/Navbar';

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='container mx-auto min-h-screen'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
