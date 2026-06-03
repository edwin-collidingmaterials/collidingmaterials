export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-mono">
      <div className="text-center">
        <p className="text-muted-foreground/40 text-xs tracking-[0.4em] mb-4">404</p>
        <h1 className="text-2xl font-bold mb-6">PAGE NOT FOUND</h1>
        <a href="/" className="text-primary text-xs tracking-[0.3em] hover:underline">
          RETURN HOME
        </a>
      </div>
    </div>
  );
}
