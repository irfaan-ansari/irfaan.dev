import {
  AtSign,
  BookOpenText,
  Contrast,
  Ellipsis,
  FileText,
  FolderKanban,
  Home,
  Mail,
  MessageCircleMore,
  Share,
  Smartphone,
  Users,
} from "lucide-react";
import { siGithub, siInstagram, siWhatsapp, siX } from "simple-icons";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;
export const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_ID!;
export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL!;
export const SITE_TITLE = "Irfaan Ansari Portfolio";

export const LOCATION = {
  name: "New Delhi, India",
  link: "https://www.google.com/maps/place/newdelhi",
};
export const ANNOUNCEMENT = {
  tag: "new 🎉",
  message: "Wave Animation in React",
};
export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    shortcutKey: "H",
    type: "navigate",
    prevent: false,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
    shortcutKey: "P",
    type: "navigate",
    prevent: false,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: BookOpenText,
    shortcutKey: "B",
    type: "navigate",
    prevent: false,
  },
  {
    title: "Contact",
    href: "contact",
    icon: Mail,
    shortcutKey: "C",
    type: "toggle",
    toggleKey: "contact",
    prevent: true,
  },
] as const;

export const CONTACT_LINKS = [
  {
    title: "Email",
    label: "idevirfan@gmail.com",
    href: "mailto:idevirfan@gmail.com",
    icon: AtSign,
  },
  {
    title: "Phone",
    label: "+91-9958367688",
    href: "tel:+919958367688",
    icon: Smartphone,
  },
];

export const SOCIAL_LINKS = {
  x: {
    title: "X",
    href: "https://x.com/irfaan_ansari1",
    label: "@irfaan_ansari1",
    icon: siX,
  },
  instagram: {
    title: "Instagram",
    href: "https://instagram.com/irfaan.dev",
    label: "@irfaan.dev",
    icon: siInstagram,
  },
  linkedin: {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/irfaan-ansari/",
    label: "/irfaan-ansari",
    icon: {
      hex: "0A66C2",
      path: "M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z",
    },
  },
  github: {
    title: "GitHub",
    href: "https://github.com/irfaan-ansari/",
    label: "/irfaan-ansari",
    icon: siGithub,
  },
};

export const SHORTCUT_KEYS = [
  {
    title: "Resume",
    href: "/resume.pdf",
    icon: FileText,
    shortcutKey: "R",
    type: "navigate",
    prevent: false,
  },
  {
    title: "Menu",
    shortcutKey: "M",
    icon: Ellipsis,
    type: "toggle",
    toggleKey: "menu",
    prevent: true,
  },
  {
    title: "Share",
    shortcutKey: "S",
    icon: Share,
    type: "toggle",
    toggleKey: "share",
    prevent: false,
  },
  {
    title: "Chat",
    shortcutKey: "O",
    icon: MessageCircleMore,
    type: "toggle",
    toggleKey: "chat",
    prevent: true,
  },
  {
    title: "Book call",
    shortcutKey: "Y",
    icon: Users,
    type: "toggle",
    toggleKey: "bookCall",
    prevent: true,
  },
  {
    title: "Copy email",
    shortcutKey: "E",
    icon: AtSign,
    type: "copy",
    prevent: false,
  },
  {
    title: "Toggle theme",
    shortcutKey: "T",
    icon: Contrast,
    type: "theme",
    prevent: false,
  },
] as const;

export const SHARE_OPTIONS = [
  {
    title: "X",
    href: "https://twitter.com/intent/tweet?url=",
    icon: siX,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    icon: {
      hex: "0A66C2",
      path: "M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z",
    },
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/?text=",
    icon: siWhatsapp,
  },
];
