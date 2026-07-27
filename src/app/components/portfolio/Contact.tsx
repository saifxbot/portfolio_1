import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Copy, Check, Phone, MapPin, Linkedin } from "lucide-react";
import { PROFILE } from "./data";

const EMAIL = PROFILE.email;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-sm uppercase tracking-[0.3em] text-primary"
        >
          Contact — Open to new projects
        </motion.p>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[2.75rem] leading-[0.98] tracking-[-0.02em] sm:text-[4.5rem]"
            >
              Have a space
              <br />
              worth <span className="italic text-primary">designing?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 text-[1.2rem] text-foreground underline decoration-primary/40 decoration-1 underline-offset-8 transition-colors hover:text-primary sm:text-[1.5rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {EMAIL}
              <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground lg:justify-end"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied to clipboard" : "Copy email"}
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
          <a
            href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary"
          >
            <Phone size={15} /> {PROFILE.phone}
          </a>
          <a
            href="https://www.linkedin.com/in/imam-hossain-234153214/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground/70">
            <MapPin size={15} /> {PROFILE.location}
          </span>
        </div>
      </div>
    </section>
  );
}
