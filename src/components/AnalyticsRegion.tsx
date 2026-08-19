"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function AnalyticsRegion({
  region,
}: {
  region: string | null;
}) {
  useEffect(() => {
    // The Analytics component sets up window.va in its own effect, which
    // isn't guaranteed to run before this one. track() silently no-ops if
    // window.va isn't defined yet, so queue it ourselves if needed.
    if (!window.va) {
      window.va = (event, properties) => {
        window.vaq = window.vaq || [];
        window.vaq.push([event, properties]);
      };
    }
    track("region_view", { region: region ?? "unknown" });
    // Only needs to fire once per page load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
