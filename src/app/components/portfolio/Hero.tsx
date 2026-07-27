import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { CAPABILITIES, PROFILE } from "./data";
import portrait from "../../../imports/portrait.png";

const TYPEWRITER_WORDS = [
  "Interior Designer.",
  "Space Planner.",
  "AutoCAD Expert.",
  "3D Visualiser.",
  "Junior Architect.",
];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span
      style={{ fontFamily: "'Raleway', sans-serif" }}
      className="mt-4 block text-[1.1rem] font-medium tracking-wide text-primary sm:text-[1.3rem]"
    >
      {displayed}
      <span className="ml-0.5 inline-block w-[2px] h-[1.1em] bg-primary align-middle animate-pulse" />
    </span>
  );
}

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="col-span-1 lg:col-span-7"
          >
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[3.2rem] leading-[0.95] tracking-[-0.02em] sm:text-[4.5rem] lg:text-[6.5rem]"
            >
              Built with purpose and care.
              <br />
              I shape spaces
              <br />
              that feel <span className="italic text-primary">considered</span>
              <br />
              &amp; lived-in.
            </h1>
            <Typewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 lg:col-span-5"
          >
            <img
              src={portrait}
              alt="Imam Hossain"
              className="mb-0 w-full"
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              Architecture Technology graduate and Junior Architect at Sara
              Interior, turning plans into warm, buildable interiors.
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
