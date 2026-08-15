"use client";

import { motion } from "framer-motion";
import { Dog, Drama, Pizza, type LucideIcon } from "lucide-react";
import { interests, type Interest } from "@/content/resume";

const icons: Record<Interest["icon"], LucideIcon> = {
  dog: Dog,
  drama: Drama,
  pizza: Pizza,
};

function InterestCard({ interest, delay }: { interest: Interest; delay: number }) {
  const Icon = icons[interest.icon];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
        }}
      />
      <Icon size={28} className="relative text-accent" strokeWidth={1.5} />
      <h3 className="relative mt-4 text-lg font-semibold">{interest.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">
        {interest.blurb}
      </p>
    </motion.div>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl"
        >
          Outside of work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-muted"
        >
          A few things about me that have nothing to do with APIs&hellip; for now.
        </motion.p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {interests.map((interest, i) => (
            <InterestCard key={interest.id} interest={interest} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
