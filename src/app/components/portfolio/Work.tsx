import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PROJECTS, type Project } from "./data";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* panel */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
          >
            <X size={18} />
          </button>

          {/* image */}
          {project.image && (
            <div className="overflow-hidden rounded-t-2xl border-b border-border bg-white">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/9] object-contain"
              />
            </div>
          )}

          {/* content */}
          <div className="p-6 sm:p-8">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {project.index} — {project.year}
            </span>
            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-2 text-[1.8rem] leading-tight tracking-[-0.01em] sm:text-[2.2rem]"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.15em] text-primary">
              {project.category}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {project.modalDescription.split("\n\n").map((para, i) => (
                <span key={i} className="block mb-4 last:mb-0">{para}</span>
              ))}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
              {project.facts.map((f) => (
                <div key={f.label}>
                  <div
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-[1.5rem] leading-none text-foreground"
                  >
                    {f.value}
                  </div>
                  <div className="mt-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-6 border-b border-border pb-6">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[2.5rem] leading-none tracking-[-0.02em] sm:text-[3.5rem]"
          >
            Selected work
          </h2>
          <span className="hidden text-sm uppercase tracking-[0.2em] text-muted-foreground sm:block">
            2026
          </span>
        </div>

        <div className="flex flex-col gap-24">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {p.index} — {p.year}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mt-3 text-[2rem] leading-tight tracking-[-0.01em] sm:text-[2.4rem]"
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-primary">
                  {p.category}
                </p>
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
                  {p.facts.map((f) => (
                    <div key={f.label}>
                      <div
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-[1.5rem] leading-none text-foreground"
                      >
                        {f.value}
                      </div>
                      <div className="mt-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {f.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                {p.image ? (
                  <div
                    className="relative overflow-hidden rounded-xl border border-border bg-white group"
                    style={{ cursor: "url('/cursor.png'), pointer" }}
                    onClick={() => setSelected(p)}
                  >
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="block aspect-[3/2] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        style={{ fontFamily: "'Indie Flower', cursive" }}
                        className="rounded-full bg-black/60 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
                      >
                        click to see details
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{ fontFamily: "var(--font-display)" }}
                    className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40 p-8 text-center text-lg italic text-muted-foreground"
                  >
                    {p.title} — drawing set
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
