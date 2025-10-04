export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="min-h-screen   overflow-auto">
        {children}
      </div>

    </div>
  );
}
