"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect } from "react";

const OPT_OUT_KEY = "va-opt-out";
const OPT_OUT_PARAM = "noanalytics";

function isOptedOut() {
  const params = new URLSearchParams(window.location.search);
  return (
    params.has(OPT_OUT_PARAM) || localStorage.getItem(OPT_OUT_KEY) === "true"
  );
}

export default function SiteAnalytics() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has(OPT_OUT_PARAM)) {
      localStorage.setItem(OPT_OUT_KEY, "true");
    }
  }, []);

  return (
    <Analytics
      beforeSend={(event) => (isOptedOut() ? null : event)}
    />
  );
}
