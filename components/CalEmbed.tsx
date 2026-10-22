"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { site } from "@/data/site";

export function CalEmbed() {
  const [embedFailed, setEmbedFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const calLink = site.calLink;
  const isConfigured = Boolean(calLink) && !calLink.startsWith("[");

  useEffect(() => {
    if (!isConfigured) return;

    let cancelled = false;
    const timeout = setTimeout(() => {
      if (!cancelled && !ready) setEmbedFailed(true);
    }, 8000);

    (async () => {
      try {
        const cal = await getCalApi();
        if (cancelled) return;
        cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: "#34d399" } },
        });
        setReady(true);
      } catch {
        if (!cancelled) setEmbedFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [isConfigured, ready]);

  if (!isConfigured || embedFailed) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="text-base text-muted">
          The booking calendar could not load here.
        </p>
        <a
          href={
            isConfigured
              ? `https://cal.com/${calLink}`
              : "https://cal.com"
          }
          className="mt-4 inline-block text-base font-medium text-green underline-offset-4 hover:underline"
        >
          Open the booking page
        </a>
      </div>
    );
  }

  return (
    <div className="h-[700px] w-full overflow-hidden rounded-xl border border-border">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
