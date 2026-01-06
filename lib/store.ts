import { create } from "zustand";

export type ModalKey =
  | "command"
  | "chat"
  | "contact"
  | "bookCall"
  | "share"
  | "shortcut";

interface ModalState {
  modals: Record<ModalKey, boolean>;
  open: (key: ModalKey) => void;
  close: (key: ModalKey) => void;
  toggle: (key: ModalKey) => void;
  isOpen: (key: ModalKey) => boolean;
}

export const useModalStore = create<ModalState>((set, get) => ({
  modals: {
    command: false,
    chat: false,
    contact: false,
    bookCall: false,
    share: false,
    shortcut: false,
  },

  open: (key) => set(({ modals }) => ({ modals: { ...modals, [key]: true } })),
  close: (key) =>
    set(({ modals }) => ({ modals: { ...modals, [key]: false } })),
  isOpen: (key) => get().modals[key],
  toggle: (key) =>
    set(({ modals }) => ({
      modals: {
        ...modals,
        [key]: !modals[key],
      },
    })),
}));
