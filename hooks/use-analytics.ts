"use client";

import React from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    umami?: {
      track: (...args: any[]) => void;
    };
    dataLayer: any[];
  }
}

type EventParams = Record<string, any>;

export const useAnalytics = () => {
  const track = React.useCallback((event: string, params?: EventParams) => {
    try {
      if (typeof window === "undefined") return;

      //   track ga
      if (window.gtag) window.gtag?.("event", event, params);

      //   track umami
      if (window.umami?.track) window.umami?.track(event, params);
    } catch (error) {
      console.error("Error tracking event", error);
    }
  }, []);
  return track;
};
