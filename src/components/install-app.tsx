import { useEffect } from "react"
import { toast } from "@/components/ui/toast"

interface InstallPromptEvent extends Event {
  prompt: () => Promise<{ outcome: "accepted" | "dismissed" }>
}

export function InstallApp() {
  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true

    if (isStandalone) return

    let toastId: string | undefined
    let shown = false

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)

    const onPrompt = (event: Event) => {
      if (shown) return

      event.preventDefault()
      shown = true

      const installPrompt = event as InstallPromptEvent

      toastId = toast.add({
        title: "Install app",
        description: "Add it to your home screen.",
        timeout: 0,
        actionProps: {
          children: "Install",
          onClick: () => {
            void installPrompt.prompt().catch(() => {
              toast.add({
                title: "Install",
                description: 'Click "Install app" in your browser menu.',
              })
            })
            if (toastId) toast.close(toastId)
          },
        },
      })
    }

    const onInstalled = () => {
      if (toastId) toast.close(toastId)
    }

    const timer = window.setTimeout(() => {
      if (!isIOS || shown) return

      shown = true
      toastId = toast.add({
        title: "Install app",
        description: 'Tap Share, then choose "Add to Home Screen".',
        timeout: 0,
      })
    }, 1000)

    window.addEventListener("beforeinstallprompt", onPrompt)
    window.addEventListener("appinstalled", onInstalled)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("beforeinstallprompt", onPrompt)
      window.removeEventListener("appinstalled", onInstalled)
      if (toastId) toast.close(toastId)
    }
  }, [])

  return null
}
