import { toast } from "sonner";
import { SITE_URL } from "./config";
import { twMerge } from "tailwind-merge";
import { TinyColor } from "@ctrl/tinycolor";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isActiveLink = (path: string, href: string) => {
  return path === href || (path.startsWith(href) && href !== "/");
};

export const generateColorsFromHex = (hex: string) => {
  const tiny = new TinyColor(hex);
  const dominantColor = tiny.saturate(20).toHexString();

  const colors = {
    dominantColor,
    primary: "oklch(0.922 0 0)",
    primaryForeground: "oklch(0.205 0 0)",
  };

  if (tiny.isLight()) {
    colors.primary = "oklch(0.205 0 0)";
    colors.primaryForeground = "oklch(0.985 0 0)";
  }

  return colors;
};

export const copyText = (text: string, message?: string) => {
  try {
    navigator.clipboard.writeText(text);
    if (message) toast.success(message);
    return true;
  } catch (err) {
    console.error("Copy failed:", err);
    return false;
  }
};

export function formatDate(date: string) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
    return targetDate.toLocaleString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  return formattedDate;
}

export function calculateReadTime(text: string, wordsPerMinute = 200) {
  if (!text) return 0;

  const words = text.trim().split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
}

/**
 * Builds a full URL from a slug or returns the URL if already absolute
 *
 * @param {string} input - slug or full URL (e.g. https://example.com or /link-page)
 * @returns {string}
 */

export function absoluteUrl(input: string) {
  if (/^http?:\/\//i.test(input)) return input;

  const joined = `${SITE_URL}/${input}`;

  return joined.replace(/([^:]\/)[\/#]+/g, "$1");
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};
