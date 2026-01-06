import Script from "next/script";
import { GA_ID, UMAMI_ID } from "@/lib/config";

export default function Analytics() {
  if (!GA_ID && !UMAMI_ID) return null;

  return (
    <>
      {/* umami script */}
      <Script
        id="umami"
        strategy="afterInteractive"
        src="https://cloud.umami.is/script.js"
        data-website-id={UMAMI_ID}
      />

      {/* Load GA script */}
      <Script
        id="ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialize GA */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer =   window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
