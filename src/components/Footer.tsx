"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { profile } from "@/content/resume";
import Magnetic from "./Magnetic";
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";

const talkTopics = [
  "developer experience",
  "software engineering",
  "developer relations",
  "technical writing",
];

export default function Footer() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const swapDelay = 350;
    const glitchDuration = 900;
    let swapTimeout: ReturnType<typeof setTimeout>;
    let endTimeout: ReturnType<typeof setTimeout>;

    const id = setInterval(() => {
      setIsGlitching(true);
      swapTimeout = setTimeout(() => {
        setTopicIndex((i) => (i + 1) % talkTopics.length);
      }, swapDelay);
      endTimeout = setTimeout(() => {
        setIsGlitching(false);
      }, glitchDuration);
    }, 3400);

    return () => {
      clearInterval(id);
      clearTimeout(swapTimeout);
      clearTimeout(endTimeout);
    };
  }, []);

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
          Let&apos;s talk{" "}
          <span className="text-gradient">
            <span
              data-text={talkTopics[topicIndex]}
              className={`glitch-text${isGlitching ? " is-glitching" : ""}`}
            >
              {talkTopics[topicIndex]}
            </span>
          </span>
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
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#181717] px-5 py-2.5 font-medium text-white transition-transform hover:scale-105"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 font-medium text-white transition-transform hover:scale-105"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <p className="mt-12 text-center font-label text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
