import "./styles/globals.css";
import { Suspense } from "react";
import Footer from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import { Toaster } from "@/components/ui/sonner";
import Analytics from "@/components/misc/analytics";
import { Inter, Dancing_Script } from "next/font/google";
import ChatDialog from "@/components/dialogs/chat-dialog";
import ShareDialog from "@/components/dialogs/share-dialog";
import { ScrollProgress } from "@/components/scroll-progress";
import { NavigationMenu } from "@/components/navigation-menu";
import ContactDialog from "@/components/dialogs/contact-dialog";
import { ThemeProvider } from "@/components/misc/theme-provider";
import BookCallDialog from "@/components/dialogs/book-call-dialog";
import { KeyboardShortcut } from "@/components/misc/keyboard-shortcut";
import { HashScrollHandler } from "@/components/misc/hash-scroll-handler";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

const meta = createMetadata({ path: "/" });

export const metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth scroll-p-16"
      data-scroll-behavior="smooth"
    >
      <Analytics />
      <body
        className={`${inter.variable} ${script.variable} antialiased selection:bg-highlight selection:text-white min-h-dvh relative font-inter`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="top-center" />
          {/* scroll progress */}
          <ScrollProgress />
          <NavigationMenu />
          <div className="max-w-180 mx-auto w-full px-4">
            {/* main */}
            <main className="relative ">{children}</main>

            {/* footer */}
            <Footer />
          </div>

          {/* global components */}
          <BookCallDialog />
          <ContactDialog />
          <Suspense>
            <ChatDialog />
            <ShareDialog />
          </Suspense>
          <KeyboardShortcut />
          <HashScrollHandler />
        </ThemeProvider>
      </body>
    </html>
  );
}
