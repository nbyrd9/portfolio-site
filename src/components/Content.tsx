"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { posts, featuredVideo, profile } from "@/content/resume";

export default function Content() {
  const relatedPost = posts.find((p) => p.id === featuredVideo.relatedPostId);

  return (
    <section id="content" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Writing &amp; demos
          </h2>
          <a
            href={profile.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            See all my writing on Docusign
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-2xl border border-surface-border bg-surface"
        >
          <div className="aspect-video w-full">
            <iframe
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-start gap-3">
              <PlayCircle size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold leading-snug">
                  {featuredVideo.title}
                </h3>
                {relatedPost && (
                  <a
                    href={relatedPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
                  >
                    Read the companion blog post
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={clsx(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-shadow hover:shadow-xl hover:shadow-accent/10",
                i === posts.length - 1 &&
                  posts.length % 2 === 1 &&
                  "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.625rem)]",
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at center, var(--accent-2), transparent 70%)",
                }}
              />
              <h3 className="flex items-start justify-between gap-3 text-lg font-semibold leading-snug">
                {post.title}
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {post.summary}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
