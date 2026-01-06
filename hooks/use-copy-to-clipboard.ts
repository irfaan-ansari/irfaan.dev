import { copyText } from "@/lib/utils";
import { useState, useCallback } from "react";

export default function useCopyToClipboard({
  timeout = 2000,
  message,
}: {
  timeout?: number;
  message?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (typeof window === "undefined" || !navigator.clipboard) {
        return false;
      }

      const result = copyText(text, message);
      if (result === false) setCopied(false);

      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    },
    [timeout]
  );

  return { copied, copy };
}
