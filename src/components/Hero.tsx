"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/content/resume";
import Magnetic from "./Magnetic";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-2), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="w-full max-w-2xl">
          <motion.p
            variants={item}
            className="mb-4 font-label text-sm uppercase tracking-[0.2em] text-muted"
          >
            {profile.location} · Developer Advocate
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <a
                href="#highlights"
                className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
              >
                See my work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-block rounded-full border border-surface-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative shrink-0 rounded-full p-1.5"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
          }}
        >
          <div className="overflow-hidden rounded-full bg-background p-1.5">
            <Image
              src={profile.headshot}
              alt={profile.name}
              width={224}
              height={224}
              priority
              className="h-40 w-40 rounded-full object-cover sm:h-56 sm:w-56"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
