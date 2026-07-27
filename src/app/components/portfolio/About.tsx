import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { EDUCATION, EXPERIENCE } from "./data";
import portrait from "../../../imports/portrait.png";

export function About() {
  return (
    <section id="about" className="bg-accent px-6 py-24 text-accent-foreground lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-accent-foreground/60">
            About
          </p>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[1.9rem] leading-[1.25] tracking-[-0.01em] sm:text-[2.4rem]"
          >
            Wanna be an inspiration for the world, for the people of all genarations. Working as a
            <span className="italic text-primary"> Junior Architect</span>, I
            craft interiors that are as buildable as they are
            <span className="italic text-primary"> beautiful</span>.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-accent-foreground/75">
            From furniture layouts and working drawings to 3D modelling, I take
            a space from first plan to a resolved, client-ready design. I'm
            looking for a responsible, challenging role where my knowledge and
            education create real value on site.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-accent-foreground/15 pt-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {EDUCATION.map((e) => (
                  <li key={e.school}>
                    <div style={{ fontFamily: "var(--font-display)" }} className="text-[1.15rem]">
                      {e.school}
                    </div>
                    <div className="text-sm text-accent-foreground/70">{e.detail}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-primary">
                      {e.meta}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
                Experience
              </h3>
              <ul className="mt-4 space-y-4">
                {EXPERIENCE.map((x) => (
                  <li key={x.company}>
                    <div style={{ fontFamily: "var(--font-display)" }} className="text-[1.15rem]">
                      {x.role}
                    </div>
                    <div className="text-sm text-accent-foreground/70">{x.company}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-primary">
                      {x.meta}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 order-1 lg:order-2"
        >
          <div className="mx-auto max-w-[18rem] sm:max-w-[20rem] lg:mx-0 lg:max-w-[22rem] lg:ml-auto">
            <ImageWithFallback
              src={portrait}
              alt="Imam Hossain"
              className="aspect-[3/4] w-full object-top object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
