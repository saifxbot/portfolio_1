import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <span
          style={{ fontFamily: "var(--font-display)" }}
          className="text-lg italic text-foreground"
        >
          {PROFILE.name}
        </span>
        <span className="uppercase tracking-[0.15em]">
          © {new Date().getFullYear()} — {PROFILE.title}, Bangladesh
        </span>
        <a href="#top" className="uppercase tracking-[0.15em] transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
