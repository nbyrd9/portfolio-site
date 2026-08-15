"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { highlights, type Highlight } from "@/content/resume";

function HighlightCard({
  h,
  delay,
  centered,
}: {
  h: Highlight;
  delay: number;
  centered: boolean;
}) {
  const cardProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay },
    whileHover: { y: -6 },
    className: clsx(
      "group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-shadow hover:shadow-xl hover:shadow-accent/10",
      centered && "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.625rem)]",
    ),
  };

  const content = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent), transparent 70%)",
        }}
      />
      <h3 className="text-lg font-semibold">{h.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{h.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {h.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-surface-border px-3 py-1 font-label text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (h.url) {
    return (
      <motion.a href={h.url} target="_blank" rel="noopener noreferrer" {...cardProps}>
        {content}
      </motion.a>
    );
  }

  return <motion.article {...cardProps}>{content}</motion.article>;
}

export default function Highlights() {
  return (
    <section id="highlights" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl"
        >
          Highlights
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <HighlightCard
              key={h.id}
              h={h}
              delay={i * 0.08}
              centered={i === highlights.length - 1 && highlights.length % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
