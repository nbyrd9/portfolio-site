"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/content/resume";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-3xl border border-surface-border bg-surface px-8 py-14 text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
          Let&apos;s talk <span className="text-gradient">developer experience</span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-transform hover:scale-105"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </Magnetic>
          <a
            href={`tel:${profile.phone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <span className="flex items-center gap-2 text-muted">
            <MapPin size={16} />
            {profile.location}
          </span>
        </div>
      </motion.div>

      <p className="mt-12 text-center font-label text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
