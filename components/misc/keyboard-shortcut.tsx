"use client";

import { ModalKey } from "@/lib/store";
import { useHotkeys } from "react-hotkeys-hook";
import { NAVIGATION, SHORTCUT_KEYS } from "@/lib/config";
import { useNavigation } from "@/hooks/use-navigation";

export function KeyboardShortcut() {
  const uniqueShortcutKeys = [...SHORTCUT_KEYS, ...NAVIGATION];

  return uniqueShortcutKeys.map((item) => (
    <HotKey key={item.shortcutKey} {...item} />
  ));
}

export const HotKey = ({
  type,
  toggleKey,
  href,
  shortcutKey,
  prevent = false,
  enabled = true,
}: {
  type: string;
  toggleKey?: ModalKey;
  href?: string;
  shortcutKey: string;
  prevent?: boolean;
  enabled?: boolean;
}) => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type, toggleKey, href });
  };

  useHotkeys(shortcutKey, handleClick, {
    enabled,
    preventDefault: prevent,
  });

  return null;
};
