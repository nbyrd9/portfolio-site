"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            About me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I&apos;m a Developer Advocate who started out as a software
            engineer, shipping features in Ruby on Rails and React at
            Calendly and running onboarding experiments that shaped how new
            users experienced the product. I love building, and that instinct
            never went away.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            What pulled me toward advocacy was knowing what it feels like to
            be a blocked engineer: staring at a cryptic error with no clear
            next step, digging through outdated docs, losing an afternoon to
            something that should have taken ten minutes. I moved into
            Developer Advocacy to close that gap, building the API docs,
            tutorials, videos, talks, and reference implementations I wish
            I&apos;d had.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I spent years as an international flight attendant before
            switching into software. Turns out explaining procedures clearly
            to a packed cabin under
            pressure is excellent training for creating content developers
            actually use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
