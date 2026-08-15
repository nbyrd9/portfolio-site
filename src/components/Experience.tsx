"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/content/resume";

export default function Experience() {
  const [openId, setOpenId] = useState<string>(experience[0].id);

  return (
    <section id="experience" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-10 flex flex-col gap-3">
          {experience.map((role, i) => {
            const isOpen = openId === role.id;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-surface-border bg-surface"
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : role.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-lg font-semibold">{role.role}</span>
                      <span className="text-muted">· {role.company}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {role.start} – {role.end} · {role.location}
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-muted"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                    >
                      <ul className="flex flex-col gap-3 px-6 pb-6 text-sm leading-relaxed text-muted">
                        {role.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
