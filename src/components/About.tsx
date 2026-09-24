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
            I&apos;m a software engineer who brings a builder&apos;s
            perspective to enterprise customer solutions and developer
            experience. I&apos;ve shipped features in React and Ruby on
            Rails, run onboarding experiments, built API integrations and
            reference implementations, and brought feedback from developers
            and customers into product conversations. Staying close to the
            code helps me connect what someone is trying to accomplish with
            what it takes to make it work.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I enjoy getting into the details of a problem: understanding a
            customer&apos;s workflow, tracing where an integration gets
            stuck, and finding a clear path forward. Sometimes that means
            building an example or troubleshooting alongside a developer.
            Other times it means creating API docs, tutorials, videos, or
            talks that help many people solve the same problem.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Before software, I spent years as an international flight
            attendant. Explaining procedures clearly to a packed cabin under
            pressure turned out to be excellent training for listening
            closely, staying calm, and making complex technical ideas easier
            to understand. ✈️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
