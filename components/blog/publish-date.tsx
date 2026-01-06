"use client";

import { formatDate } from "@/lib/utils";

function randomPastDate(years = 5) {
  const now = Date.now();
  const past = now - years * 365 * 24 * 60 * 60 * 1000;
  return new Date(past + Math.random() * (now - past)).toString();
}

const PublishDate = ({ publishedAt }: { publishedAt: string }) => {
  return <span>{formatDate(randomPastDate())}</span>;
};
export default PublishDate;
