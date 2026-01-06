import { RateLimitEntry } from "./types";
import { headers } from "next/headers";

const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

export const getClientIP = async (): Promise<string> => {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const realIP = headerList.get("x-real-ip");
  const cfConnectingIP = headerList.get("cf-connecting-ip");

  if (forwarded) return forwarded.split(",")[0].trim();
  if (realIP) return realIP;
  if (cfConnectingIP) return cfConnectingIP;

  return "127.0.01";
};

export function limiter(
  key: string,
  options?: {
    windowMs?: number;
    maxRequests?: number;
  }
) {
  const windowMs = options?.windowMs ?? RATE_LIMIT_WINDOW;
  const maxRequests = options?.maxRequests ?? RATE_LIMIT_MAX_REQUESTS;

  const now = Date.now();
  const entry = rateLimitStore.get(key);

  // does not have entry
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  // limit exhausted
  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      maxRequests,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000),
    };
  }

  // increase the request count
  entry.count += 1;
  rateLimitStore.set(key, entry);

  // allowed
  return {
    allowed: true,
    remaining: maxRequests - entry.count,
  };
}
