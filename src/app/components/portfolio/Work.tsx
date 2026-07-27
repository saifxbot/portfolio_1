import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PROJECTS } from "./data";

export function Work() {
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
                  <div className="overflow-hidden rounded-xl border border-border bg-white">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="block aspect-[3/2] w-full object-contain"
                    />
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
    </section>
  );
}
