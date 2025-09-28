
export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='container mx-auto min-h-screen'>
        {children}
      </div>
    </div>
  )
}
