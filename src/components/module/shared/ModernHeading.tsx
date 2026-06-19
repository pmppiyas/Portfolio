const ModernHeading = ({
  label,
  head,
  paragraph,
}: {
  label?: string;
  head: string;
  paragraph: string;
}) => {
  return (
    <div className="my-12 text-center">
      <span className="border-primary/30 bg-primary/10 text-primary mb-4 inline-block rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-widest">
        {label}
      </span>

      <h2 className="text-primary text-neon text-4xl font-bold tracking-tight md:text-5xl">
        {head}
      </h2>

      <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm">
        {paragraph}
      </p>

      <div className="bg-primary shadow-neon mx-auto mt-5 h-1 w-28 rounded-full" />
    </div>
  );
};

export default ModernHeading;
