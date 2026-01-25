import { RESUME } from "./resume";
import { SITE_URL } from "./config";
import type { Metadata } from "next";
import { absoluteUrl } from "./utils";

const { name, about, roles } = RESUME;

type CreateMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  [key: string]: Metadata[keyof Metadata];
};

export function createMetadata({
  title,
  description = about,
  keywords = [],
  path = "/",
  type = "website",
  ...props
}: CreateMetadataProps): Metadata {
  const ogUrl = new URL(absoluteUrl("/og"));

  ogUrl.searchParams.set("title", title ?? name);
  ogUrl.searchParams.set("description", description);

  return {
    metadataBase: absoluteUrl(path),
    title: title || {
      default: `${name} | ${roles[0]}`,
      template: `%s | ${name}`,
    },
    description,
    keywords: [
      "portfolio",
      "developer",
      "full stack developer",
      "web development",
      "programming",
      "projects",
      "blog",
      "tutorials",
      "technical writing",
    ],
    applicationName: name,
    authors: [{ name, url: SITE_URL }],
    creator: name,
    publisher: name,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      type,
      locale: "en_US",
      url: absoluteUrl(path),
      title,
      description,
      siteName: `${name} Portfolio`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@irfaanansari1",
      images: [ogUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "portfolio",
    ...props,
  };
}
