"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function AnalyticsRegion({
  region,
}: {
  region: string | null;
}) {
  useEffect(() => {
    track("region_view", { region: region ?? "unknown" });
    // Only needs to fire once per page load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
