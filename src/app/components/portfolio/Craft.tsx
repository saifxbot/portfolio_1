import { motion } from "motion/react";
import { CRAFT } from "./data";

export function Craft() {
  return (
    <section id="craft" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary">Skills</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-[3.25rem]"
            >
              The tools
              <br />
              behind every
              <br />
              <span className="italic">drawing.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:col-span-8">
            {CRAFT.map((group, gi) => (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="bg-card p-7"
              >
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {group.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[1.05rem] text-foreground"
                    >
                      <span className="text-primary">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
