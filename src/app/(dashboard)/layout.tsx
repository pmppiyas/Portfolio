
export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='container mx-auto min-h-screen'>
        {children}
      </div>
    </div>
  )
}
