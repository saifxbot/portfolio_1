import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { CAPABILITIES, PROFILE } from "./data";
import portrait from "../../../imports/portrait.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-16 lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-sm uppercase tracking-[0.35em] text-primary"
        >
          {PROFILE.title} — Narayanganj, Bangladesh
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            style={{ fontFamily: "var(--font-display)" }}
            className="col-span-1 text-[3.2rem] leading-[0.95] tracking-[-0.02em] sm:text-[4.5rem] lg:col-span-7 lg:text-[6.5rem]"
          >
            I shape spaces
            <br />
            that feel <span className="italic text-primary">considered</span>
            <br />
            & lived-in.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 lg:col-span-5"
          >
            <img
              src={portrait}
              alt="Imam Hossain"
              className="mb-6 w-full"
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              Architecture Technology graduate and Junior Architect at Sara
              Interior — turning plans into warm, buildable interiors.
            </p>
            <a
              href="#work"
              className="group mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground"
            >
              See the work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* marquee of capabilities */}
      <div className="mt-20 overflow-hidden border-y border-border py-5">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-16 whitespace-nowrap pr-16">
          {[...CAPABILITIES, ...CAPABILITIES].map((c, i) => (
            <span
              key={`${c}-${i}`}
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl italic text-muted-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
