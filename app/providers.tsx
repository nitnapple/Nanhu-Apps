"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import Clarity from "@microsoft/clarity";

if (typeof window !== "undefined") {
  posthog.init('phc_yXouaAwGMxjv3xjs3vW4aSMiggUCkZT53jRWQYGsUPvX', {
    api_host: 'https://eu.i.posthog.com',
    person_profiles: "identified_only",
    capture_pageview: false, // Pageview tracking is handled manually below
    defaults: '2026-05-30'
  } as any);
}

function PostHogPageviewContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== "undefined") {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogPageview() {
  return (
    <Suspense fallback={null}>
      <PostHogPageviewContent />
    </Suspense>
  );
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const projectId = "xmaogvvarc";
      Clarity.init(projectId);
    }
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
