"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 320, mass: 0.4 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    document.documentElement.classList.add("custom-cursor");

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(Boolean(target?.closest?.(HOVER_SELECTOR)));
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [dotX, dotY]);

  return (
    <>
      <motion.div
        aria-hidden
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 rounded-full bg-accent [@media(hover:hover)_and_(pointer:fine)]:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "pointer-events-none fixed left-0 top-0 z-[999] hidden h-9 w-9 rounded-full border-2 transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:block",
          hovering ? "border-accent-2 bg-accent-2/10" : "border-accent bg-transparent",
        )}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
