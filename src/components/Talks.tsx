"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { talks, type Talk } from "@/content/resume";

function TalkCard({ t, delay, centered }: { t: Talk; delay: number; centered: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-shadow hover:shadow-xl hover:shadow-accent/10",
        centered && "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.625rem)]",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
        style={{
          background: "radial-gradient(circle at center, var(--accent-2), transparent 70%)",
        }}
      />
      <div className="flex items-center justify-between gap-3">
        <span className="font-label text-xs uppercase tracking-wide text-muted">{t.type}</span>
        <span className="font-label text-xs text-muted">{t.date}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug">{t.title}</h3>
      <p className="mt-1 text-sm text-muted">
        {t.event}
        {t.location && ` · ${t.location}`}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{t.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {t.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-surface-border px-3 py-1 font-label text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Talks() {
  return (
    <section id="talks" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl"
        >
          Conferences &amp; talks
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {talks.map((t, i) => (
            <TalkCard
              key={t.id}
              t={t}
              delay={i * 0.08}
              centered={i === talks.length - 1 && talks.length % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
