export default function Footer() {
  return (
    <footer className="border-t border-border/20 px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <span className="font-mono text-sm font-bold tracking-widest text-foreground">
            COLLIDING<span className="text-primary"> MATERIALS LIMITED</span>
          </span>
          <p className="font-mono text-[10px] text-muted-foreground/40 mt-3 tracking-wider max-w-xs leading-relaxed">
            PRECISION-ENGINEERED ENERGY & ELECTRONIC MATERIALS FOR INDUSTRY
          </p>
        </div>

        <div>
          <a href="https://www.linkedin.com/company/collidingmaterials/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-foreground/40 hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/10">
        <span className="font-mono text-[10px] text-muted-foreground/30 tracking-wider">
          © 2026 COLLIDING MATERIALS LIMITED. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}