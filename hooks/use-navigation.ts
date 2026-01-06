"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CONTACT_LINKS } from "@/lib/config";
import { useAnalytics } from "@/hooks/use-analytics";
import { ModalKey, useModalStore } from "@/lib/store";
import { useToggleTheme } from "@/hooks/use-toggle-theme";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";

type ShortcutItem = {
  type: string;
  toggleKey?: ModalKey;
  href?: string;
  isShortcut?: false;
};

export function useNavigation() {
  const router = useRouter();
  const track = useAnalytics();
  const { toggle: toggleTheme } = useToggleTheme();
  const toggleModal = useModalStore((s) => s.toggle);

  const { copy } = useCopyToClipboard({
    message: "Email copied to clipboard!",
  });

  const handleAction = useCallback(
    (item: ShortcutItem) => {
      // track event
      track(`action_${item.type}`, {
        action_label: item.href || item.toggleKey,
        isShortcut: item.isShortcut,
      });

      switch (item.type) {
        case "toggle": {
          toggleModal(item.toggleKey as ModalKey);
          break;
        }

        case "copy": {
          copy(CONTACT_LINKS[0].label);
          break;
        }

        case "navigate": {
          if (item.href) {
            router.push(item.href.replace("#", ""));
          }
          break;
        }

        case "theme": {
          toggleTheme();
          break;
        }
        default:
          console.error("Navigation type is not defined....");
      }
    },
    [toggleModal, copy, toggleTheme]
  );

  return { handleAction };
}
