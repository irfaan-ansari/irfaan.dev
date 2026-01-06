import type { Metadata } from "next";
import { SITE_URL } from "./config";
import { RESUME } from "./resume";

const { name, about, roles } = RESUME;

type CreateMetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export function createMetadata({
  title,
  description = about,
  keywords = [],
  path = "/",
  ogImage = "/og/home.png",
  type = "website",
  publishedTime,
}: CreateMetadataProps): Metadata {
  const url = new URL(path, SITE_URL).toString();

  let og = ogImage;

  if (!ogImage.startsWith("http")) {
    og = new URL(ogImage, SITE_URL).toString();
  }

  const mergedKeywords = Array.from(
    new Set([
      ...keywords,
      "portfolio",
      "developer",
      "full stack developer",
      "web development",
      "programming",
      "projects",
      "blog",
      "tutorials",
      "technical writing",
    ])
  );

  return {
    metadataBase: url,
    title: title || {
      default: `${name} | ${roles[0]}`,
      template: `%s | ${name}`,
    },
    description,
    keywords: mergedKeywords,
    applicationName: name,
    authors: [{ name, url: SITE_URL }],
    creator: name,
    publisher: name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      title,
      description,
      siteName: `${name} Portfolio`,
      images: [
        {
          url: og,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        authors: [name],
        tags: keywords,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // creator: "handle",
      images: [og],
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
    category: type === "article" ? "technology" : "portfolio",
  };
}
